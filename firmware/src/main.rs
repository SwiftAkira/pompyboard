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
    adc.configure_channel(&pa0, Sequence::One, SampleTime::Cycles_480);

    usb::setup(hal::otg_fs::USB {
        usb_global: dp.OTG_FS_GLOBAL,
        usb_device: dp.OTG_FS_DEVICE,
        usb_pwrclk: dp.OTG_FS_PWRCLK,
        pin_dm: gpioa.pa11.into(),
        pin_dp: gpioa.pa12.into(),
        hclk: clocks.hclk(),
    });

    let mut report = tablet::Report::default();

    loop {
        // for i in 0..16 {
        //     mux.select(i);
        //     let sample = adc.convert(&pa0, SampleTime::Cycles_480);
        //     let _mv = adc.sample_to_millivolts(sample);
        // }

        mux.select(0);
        let sample = adc.convert(&pa0, SampleTime::Cycles_480);
        let mv = adc.sample_to_millivolts(sample);
        report.x = mv;
        report.y = 69;
        usb::poll();
        usb::push(report).ok().unwrap_or(0);
    }
}
