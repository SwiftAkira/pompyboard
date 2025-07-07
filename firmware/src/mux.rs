use crate::hal;

const CHANNELS: [[bool; 4]; 16] = [
    [false, false, false, false],
    [true, false, false, false],
    [false, true, false, false],
    [true, true, false, false],
    [false, false, true, false],
    [true, false, true, false],
    [false, true, true, false],
    [true, true, true, false],
    [false, false, false, true],
    [true, false, false, true],
    [false, true, false, true],
    [true, true, false, true],
    [false, false, true, true],
    [true, false, true, true],
    [false, true, true, true],
    [true, true, true, true],
];

pub struct Mux {
    s0: hal::gpio::Pin<'B', 15, hal::gpio::Output>,
    s1: hal::gpio::Pin<'B', 14, hal::gpio::Output>,
    s2: hal::gpio::Pin<'B', 13, hal::gpio::Output>,
    s3: hal::gpio::Pin<'B', 12, hal::gpio::Output>,
}

impl Mux {
    pub fn new(gpiob: hal::gpio::gpiob::Parts) -> Mux {
        Mux {
            s0: gpiob.pb15.into_push_pull_output(),
            s1: gpiob.pb14.into_push_pull_output(),
            s2: gpiob.pb13.into_push_pull_output(),
            s3: gpiob.pb12.into_push_pull_output(),
        }
    }

    pub fn select(&mut self, i: usize) {
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
}
