#![allow(static_mut_refs)]
#![no_main]
#![no_std]

use defmt_rtt as _; // See https://defmt.ferrous-systems.com/global-logger for more information
use panic_probe as _; // Print panic message to probe console
use stm32f4xx_hal as hal;

mod mux;
mod tablet;
mod usb;

use hal::{
    adc::config::{AdcConfig, SampleTime, Sequence},
    prelude::*,
};

const SENSOR_THRESHOLD: u16 = 2000;
const SENSOR_ROWS: usize = 4;
const SENSOR_COLUMNS: usize = 4;

#[cortex_m_rt::entry]
fn main() -> ! {
    let dp = hal::pac::Peripherals::take().unwrap(); // device peripheral
    let rcc = dp.RCC.constrain();
    let clocks = rcc
        .cfgr
        .use_hse(25.MHz())
        .sysclk(84.MHz())
        .pclk1(24.MHz())
        .require_pll48clk()
        .freeze();

    let gpiob = dp.GPIOB.split();
    let mut mux = mux::Mux::new(gpiob);

    let mut adc = hal::adc::Adc::adc1(dp.ADC1, true, AdcConfig::default());
    let gpioa = dp.GPIOA.split();
    let pa0 = gpioa.pa0.into_analog();
    adc.configure_channel(&pa0, Sequence::One, SampleTime::Cycles_28);

    usb::setup(hal::otg_fs::USB {
        usb_global: dp.OTG_FS_GLOBAL,
        usb_device: dp.OTG_FS_DEVICE,
        usb_pwrclk: dp.OTG_FS_PWRCLK,
        pin_dm: gpioa.pa11.into(),
        pin_dp: gpioa.pa12.into(),
        hclk: clocks.hclk(),
    });

    let mut report = tablet::Report::default();

    let mut sensor_data = [[0; SENSOR_COLUMNS]; SENSOR_ROWS];
    let mut mv;

    loop {
        // simulate larger array
        for _ in 0..8 {
            for i in 0..SENSOR_ROWS {
                for j in 0..SENSOR_COLUMNS {
                    mux.select(4 * i + j);
                    let sample = adc.convert(&pa0, SampleTime::Cycles_28);
                    mv = adc.sample_to_millivolts(sample);
                    sensor_data[i][j] = if mv > SENSOR_THRESHOLD {
                        mv - SENSOR_THRESHOLD
                    } else {
                        0
                    };
                }
            }

            (report.x, report.y) = find_center(sensor_data);
        }

        defmt::info!(
            "\n{:?}\n{:?}\n{:?}\n{:?}\n{} {}",
            sensor_data[0],
            sensor_data[1],
            sensor_data[2],
            sensor_data[3],
            report.x as u16,
            report.y as u16
        );

        usb::poll();
        usb::push(report).ok().unwrap_or(0);
    }
}

fn find_center(data: [[u16; SENSOR_COLUMNS]; SENSOR_ROWS]) -> (u16, u16) {
    let mut total = 0;
    for row in data {
        for point in row {
            total += point as u32;
        }
    }

    if total == 0 {
        return (0, 0);
    }

    let mut sum_x = 0;
    let mut sum_y = 0;

    for (i, row) in data.iter().enumerate() {
        for (j, &val) in row.iter().enumerate() {
            sum_x += val as u32 * j as u32;
            sum_y += val as u32 * i as u32;
        }
    }

    (
        (10000 / 4 * sum_x / total) as u16,
        (10000 / 4 * sum_y / total) as u16,
    )
}
