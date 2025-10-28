use core::u16;

use stm32f4xx_hal::{
    adc::{Adc, config::SampleTime},
    gpio::{Analog, Output, Pin},
    pac::{ADC2, ADC3},
};

pub static mut DATA: [u16; ROW_LEN * COL_LEN] = [0; ROW_LEN * COL_LEN];

const MAX: f32 = 10_000.;
const SAMPLE_TIME: SampleTime = SampleTime::Cycles_3;
const THRESHOLD: u16 = 2300; // Legacy global threshold (kept for backward compatibility)
const ROW_LEN: usize = 11;
const COL_LEN: usize = 19;

/// Calibration data for each individual sensor
/// Stores offset (baseline) and gain (sensitivity multiplier) per sensor
#[derive(Clone, Copy)]
pub struct CalibrationData {
    pub offset: u16,  // Baseline reading when no pressure applied
    pub gain: f32,    // Sensitivity multiplier (typically 0.5 to 2.0)
}

impl Default for CalibrationData {
    fn default() -> Self {
        CalibrationData {
            offset: THRESHOLD,  // Use legacy threshold as default offset
            gain: 1.0,          // Unity gain by default
        }
    }
}

/// Per-sensor calibration table
/// Each sensor in the grid has individual calibration parameters
pub static mut CALIBRATION: [CalibrationData; ROW_LEN * COL_LEN] = 
    [CalibrationData { offset: THRESHOLD, gain: 1.0 }; ROW_LEN * COL_LEN];
const CHANNELS: [[bool; 4]; ROW_LEN] = [
    [false, true, false, true],   // 10
    [true, false, false, true],   // 9
    [false, false, false, true],  // 8
    [false, false, false, false], // 0
    [true, false, false, false],  // 1
    [false, true, false, false],  // 2
    [true, true, false, false],   // 3
    [false, false, true, false],  // 4
    [true, false, true, false],   // 5
    [false, true, true, false],   // 6
    [true, true, true, false],    // 7
];

pub struct Sensor {
    adc2: Adc<ADC2>,
    adc3: Adc<ADC3>,

    s0: Pin<'E', 6, Output>,
    s1: Pin<'E', 5, Output>,
    s2: Pin<'E', 4, Output>,
    s3: Pin<'E', 3, Output>,

    in0: Pin<'F', 3, Analog>,
    in1: Pin<'F', 4, Analog>,
    in2: Pin<'F', 5, Analog>,
    in3: Pin<'F', 6, Analog>,
    in4: Pin<'F', 7, Analog>,
    in5: Pin<'F', 8, Analog>,
    in6: Pin<'F', 9, Analog>,
    in7: Pin<'F', 10, Analog>,
    in8: Pin<'C', 1, Analog>,
    in9: Pin<'C', 2, Analog>,
    in10: Pin<'C', 3, Analog>,
    in11: Pin<'A', 1, Analog>,
    in12: Pin<'A', 2, Analog>,
    in13: Pin<'A', 3, Analog>,
    in14: Pin<'A', 4, Analog>,
    in15: Pin<'A', 6, Analog>,
    in16: Pin<'A', 7, Analog>,
    in17: Pin<'C', 4, Analog>,
    in18: Pin<'C', 5, Analog>,
}

impl Sensor {
    pub fn new(
        adc2: Adc<ADC2>,
        adc3: Adc<ADC3>,
        //
        s0: Pin<'E', 6, Output>,
        s1: Pin<'E', 5, Output>,
        s2: Pin<'E', 4, Output>,
        s3: Pin<'E', 3, Output>,
        //                            | ADC1 | ADC2 | ADC3 | IN | FUll Name   |
        in0: Pin<'F', 3, Analog>, //  |      |      |    O | 9  | ADC3_IN9    |
        in1: Pin<'F', 4, Analog>, //  |      |      |    O | 14 | ADC3_IN14   |
        in2: Pin<'F', 5, Analog>, //  |      |      |    O | 15 | ADC3_IN15   |
        in3: Pin<'F', 6, Analog>, //  |      |      |    O | 4  | ADC3_IN4    |
        in4: Pin<'F', 7, Analog>, //  |      |      |    O | 5  | ADC3_IN5    |
        in5: Pin<'F', 8, Analog>, //  |      |      |    O | 6  | ADC3_IN6    |
        in6: Pin<'F', 9, Analog>, //  |      |      |    O | 7  | ADC3_IN7    |
        in7: Pin<'F', 10, Analog>, // |      |      |    O | 8  | ADC3_IN8    |
        in8: Pin<'C', 1, Analog>, //  |    O |    O |    O | 11 | ADC123_IN11 |
        in9: Pin<'C', 2, Analog>, //  |    O |    O |    O | 12 | ADC123_IN12 |
        in10: Pin<'C', 3, Analog>, // |    O |    O |    O | 13 | ADC123_IN13 |
        in11: Pin<'A', 1, Analog>, // |    O |    O |    O | 1  | ADC123_IN1  |
        in12: Pin<'A', 2, Analog>, // |    O |    O |    O | 2  | ADC123_IN2  |
        in13: Pin<'A', 3, Analog>, // |    O |    O |    O | 3  | ADC123_IN3  |
        in14: Pin<'A', 4, Analog>, // |    O |    O |      | 4  | ADC12_IN4   |
        in15: Pin<'A', 6, Analog>, // |    O |    O |      | 6  | ADC12_IN6   |
        in16: Pin<'A', 7, Analog>, // |    O |    O |      | 7  | ADC12_IN7   |
        in17: Pin<'C', 4, Analog>, // |    O |    O |      | 14 | ADC12_IN14  |
        in18: Pin<'C', 5, Analog>, // |    O |    O |      | 15 | ADC12_IN15  |
    ) -> Sensor {
        Sensor {
            adc2,
            adc3,

            s0,
            s1,
            s2,
            s3,

            in0,
            in1,
            in2,
            in3,
            in4,
            in5,
            in6,
            in7,
            in8,
            in9,
            in10,
            in11,
            in12,
            in13,
            in14,
            in15,
            in16,
            in17,
            in18,
        }
    }

    fn select_row(&mut self, i: usize) {
        if i > ROW_LEN {
            defmt::panic!(
                "mux has a valid range of 0~{} but {} was selected.",
                ROW_LEN - 1,
                i
            );
        }

        if CHANNELS[i][0] {
            self.s0.set_high();
        } else {
            self.s0.set_low();
        }

        if CHANNELS[i][1] {
            self.s1.set_high();
        } else {
            self.s1.set_low();
        }

        if CHANNELS[i][2] {
            self.s2.set_high();
        } else {
            self.s2.set_low();
        }

        if CHANNELS[i][3] {
            self.s3.set_high();
        } else {
            self.s3.set_low();
        }
    }

    fn read_row(&mut self, i: usize) {
        self.select_row(i);

        cortex_m::asm::delay(100_000); // temporary hack to reduce mux channel crosstalk

        unsafe {
            // Read raw values and apply per-sensor calibration
            DATA[i * COL_LEN + 00] = apply_calibration(i * COL_LEN + 00, self.adc3.convert(&self.in0, SAMPLE_TIME));
            DATA[i * COL_LEN + 01] = apply_calibration(i * COL_LEN + 01, self.adc3.convert(&self.in1, SAMPLE_TIME));
            DATA[i * COL_LEN + 02] = apply_calibration(i * COL_LEN + 02, self.adc3.convert(&self.in2, SAMPLE_TIME));
            DATA[i * COL_LEN + 03] = apply_calibration(i * COL_LEN + 03, self.adc3.convert(&self.in3, SAMPLE_TIME));
            DATA[i * COL_LEN + 04] = apply_calibration(i * COL_LEN + 04, self.adc3.convert(&self.in4, SAMPLE_TIME));
            DATA[i * COL_LEN + 05] = apply_calibration(i * COL_LEN + 05, self.adc3.convert(&self.in5, SAMPLE_TIME));
            DATA[i * COL_LEN + 06] = apply_calibration(i * COL_LEN + 06, self.adc3.convert(&self.in6, SAMPLE_TIME));
            DATA[i * COL_LEN + 07] = apply_calibration(i * COL_LEN + 07, self.adc3.convert(&self.in7, SAMPLE_TIME));
            DATA[i * COL_LEN + 08] = apply_calibration(i * COL_LEN + 08, self.adc2.convert(&self.in8, SAMPLE_TIME));
            DATA[i * COL_LEN + 09] = apply_calibration(i * COL_LEN + 09, self.adc2.convert(&self.in9, SAMPLE_TIME));
            DATA[i * COL_LEN + 10] = apply_calibration(i * COL_LEN + 10, self.adc2.convert(&self.in10, SAMPLE_TIME));
            DATA[i * COL_LEN + 11] = apply_calibration(i * COL_LEN + 11, self.adc2.convert(&self.in11, SAMPLE_TIME));
            DATA[i * COL_LEN + 12] = apply_calibration(i * COL_LEN + 12, self.adc2.convert(&self.in12, SAMPLE_TIME));
            DATA[i * COL_LEN + 13] = apply_calibration(i * COL_LEN + 13, self.adc2.convert(&self.in13, SAMPLE_TIME));
            DATA[i * COL_LEN + 14] = apply_calibration(i * COL_LEN + 14, self.adc2.convert(&self.in14, SAMPLE_TIME));
            DATA[i * COL_LEN + 15] = apply_calibration(i * COL_LEN + 15, self.adc2.convert(&self.in15, SAMPLE_TIME));
            DATA[i * COL_LEN + 16] = apply_calibration(i * COL_LEN + 16, self.adc2.convert(&self.in16, SAMPLE_TIME));
            DATA[i * COL_LEN + 17] = apply_calibration(i * COL_LEN + 17, self.adc2.convert(&self.in17, SAMPLE_TIME));
            DATA[i * COL_LEN + 18] = apply_calibration(i * COL_LEN + 18, self.adc2.convert(&self.in18, SAMPLE_TIME));

            // defmt::info!(
            //     "{:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03} {:03}",
            //     DATA[i * COL_LEN + 00],
            //     DATA[i * COL_LEN + 01],
            //     DATA[i * COL_LEN + 02],
            //     DATA[i * COL_LEN + 03],
            //     DATA[i * COL_LEN + 04],
            //     DATA[i * COL_LEN + 05],
            //     DATA[i * COL_LEN + 06],
            //     DATA[i * COL_LEN + 07],
            //     DATA[i * COL_LEN + 08],
            //     DATA[i * COL_LEN + 09],
            //     DATA[i * COL_LEN + 10],
            //     DATA[i * COL_LEN + 11],
            //     DATA[i * COL_LEN + 12],
            //     DATA[i * COL_LEN + 13],
            //     DATA[i * COL_LEN + 14],
            //     DATA[i * COL_LEN + 15],
            //     DATA[i * COL_LEN + 16],
            //     DATA[i * COL_LEN + 17],
            //     DATA[i * COL_LEN + 18]
            // ); // these two should be uncommented together <=====
        }
    }

    pub fn scan(&mut self) -> (u16, u16) {
        // defmt::info!(""); // these two should be uncommented together <=====

        for i in 0..ROW_LEN {
            self.read_row(i);
        }

        return find_center();
    }

    /// Perform a calibration routine to capture baseline readings for all sensors
    /// This should be called when NO pressure is applied to any sensor
    pub fn calibrate_offsets(&mut self) {
        defmt::info!("Starting sensor offset calibration...");
        
        // Take multiple samples to average out noise
        const CALIBRATION_SAMPLES: usize = 10;
        let mut accumulated: [u32; ROW_LEN * COL_LEN] = [0; ROW_LEN * COL_LEN];
        
        for _ in 0..CALIBRATION_SAMPLES {
            for row in 0..ROW_LEN {
                self.select_row(row);
                cortex_m::asm::delay(100_000);
                
                // Read raw values without calibration
                unsafe {
                    accumulated[row * COL_LEN + 00] += self.adc3.convert(&self.in0, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 01] += self.adc3.convert(&self.in1, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 02] += self.adc3.convert(&self.in2, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 03] += self.adc3.convert(&self.in3, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 04] += self.adc3.convert(&self.in4, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 05] += self.adc3.convert(&self.in5, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 06] += self.adc3.convert(&self.in6, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 07] += self.adc3.convert(&self.in7, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 08] += self.adc2.convert(&self.in8, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 09] += self.adc2.convert(&self.in9, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 10] += self.adc2.convert(&self.in10, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 11] += self.adc2.convert(&self.in11, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 12] += self.adc2.convert(&self.in12, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 13] += self.adc2.convert(&self.in13, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 14] += self.adc2.convert(&self.in14, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 15] += self.adc2.convert(&self.in15, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 16] += self.adc2.convert(&self.in16, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 17] += self.adc2.convert(&self.in17, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 18] += self.adc2.convert(&self.in18, SAMPLE_TIME) as u32;
                }
            }
        }
        
        // Calculate averages and store as offsets
        unsafe {
            for i in 0..(ROW_LEN * COL_LEN) {
                let avg = (accumulated[i] / CALIBRATION_SAMPLES as u32) as u16;
                CALIBRATION[i].offset = avg;
                defmt::debug!("Sensor {} offset: {}", i, avg);
            }
        }
        
        defmt::info!("Offset calibration complete!");
    }

    /// Calibrate gain for sensors by applying known uniform pressure
    /// This should be called when a uniform known pressure is applied to all sensors
    /// target_value: expected ADC reading after offset removal (e.g., 1000 for moderate pressure)
    pub fn calibrate_gains(&mut self, target_value: u16) {
        defmt::info!("Starting sensor gain calibration with target value {}...", target_value);
        
        const CALIBRATION_SAMPLES: usize = 10;
        let mut accumulated: [u32; ROW_LEN * COL_LEN] = [0; ROW_LEN * COL_LEN];
        
        for _ in 0..CALIBRATION_SAMPLES {
            for row in 0..ROW_LEN {
                self.select_row(row);
                cortex_m::asm::delay(100_000);
                
                unsafe {
                    accumulated[row * COL_LEN + 00] += self.adc3.convert(&self.in0, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 01] += self.adc3.convert(&self.in1, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 02] += self.adc3.convert(&self.in2, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 03] += self.adc3.convert(&self.in3, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 04] += self.adc3.convert(&self.in4, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 05] += self.adc3.convert(&self.in5, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 06] += self.adc3.convert(&self.in6, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 07] += self.adc3.convert(&self.in7, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 08] += self.adc2.convert(&self.in8, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 09] += self.adc2.convert(&self.in9, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 10] += self.adc2.convert(&self.in10, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 11] += self.adc2.convert(&self.in11, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 12] += self.adc2.convert(&self.in12, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 13] += self.adc2.convert(&self.in13, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 14] += self.adc2.convert(&self.in14, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 15] += self.adc2.convert(&self.in15, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 16] += self.adc2.convert(&self.in16, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 17] += self.adc2.convert(&self.in17, SAMPLE_TIME) as u32;
                    accumulated[row * COL_LEN + 18] += self.adc2.convert(&self.in18, SAMPLE_TIME) as u32;
                }
            }
        }
        
        // Calculate gain factors
        unsafe {
            for i in 0..(ROW_LEN * COL_LEN) {
                let avg = (accumulated[i] / CALIBRATION_SAMPLES as u32) as u16;
                
                // Calculate offset-corrected value
                let offset_corrected = if avg > CALIBRATION[i].offset {
                    avg - CALIBRATION[i].offset
                } else {
                    1 // Prevent division by zero
                };
                
                // Calculate gain to normalize to target
                if offset_corrected > 0 {
                    CALIBRATION[i].gain = target_value as f32 / offset_corrected as f32;
                    defmt::debug!("Sensor {} gain: {}", i, CALIBRATION[i].gain);
                }
            }
        }
        
        defmt::info!("Gain calibration complete!");
    }

    /// Reset all calibration data to defaults
    pub fn reset_calibration(&mut self) {
        unsafe {
            for i in 0..(ROW_LEN * COL_LEN) {
                CALIBRATION[i] = CalibrationData::default();
            }
        }
        defmt::info!("Calibration reset to defaults");
    }
}

/// Apply per-sensor calibration to a raw ADC reading
/// sensor_index: index in the sensor array (0 to ROW_LEN*COL_LEN-1)
/// raw_value: raw ADC reading
/// Returns: calibrated value
pub fn apply_calibration(sensor_index: usize, raw_value: u16) -> u16 {
    unsafe {
        let cal = CALIBRATION[sensor_index];
        
        // Apply offset
        let offset_corrected = if raw_value > cal.offset {
            raw_value - cal.offset
        } else {
            0
        };
        
        // Apply gain and clamp to u16 range
        let calibrated = (offset_corrected as f32 * cal.gain) as u32;
        if calibrated > u16::MAX as u32 {
            u16::MAX
        } else {
            calibrated as u16
        }
    }
}

pub fn threshold(val: u16) -> u16 {
    if val < THRESHOLD { 0 } else { val - THRESHOLD }
}

fn find_center() -> (u16, u16) {
    // u16::MAX is 65_535
    // u32::MAX is 4_294_967_295
    //
    // const ROW_LEN: usize = 11;
    // const COL_LEN: usize = 19;
    //
    // fn main() {
    //     let mut total = 0u32;
    //     let mut sum_x = 0u32;
    //     let mut sum_y = 0u32;
    //
    //     for i in 0..ROW_LEN * COL_LEN {
    //         total += u16::MAX as u32;
    //         sum_x += u16::MAX as u32 * (i % COL_LEN + 1) as u32;
    //         sum_y += u16::MAX as u32 * (i / COL_LEN + 1) as u32;
    //     }
    //
    //     println!("{} {} {}", total, sum_x, sum_y); // 13_696_815 136_968_150 82_180_890
    // }

    let mut total = 0u32;
    let mut sum_x = 0u32;
    let mut sum_y = 0u32;
    let mut i = 0;

    unsafe {
        for v in DATA {
            sum_x += v as u32 * (i % COL_LEN) as u32;
            sum_y += v as u32 * (i / COL_LEN) as u32;
            total += v as u32;
            i += 1;
        }
    }

    if total == 0 {
        return (0, 0);
    }

    return (
        (MAX / (COL_LEN as f32 - 1.) * sum_x as f32 / total as f32) as u16,
        (MAX / (ROW_LEN as f32 - 1.) * sum_y as f32 / total as f32) as u16,
    );
}
