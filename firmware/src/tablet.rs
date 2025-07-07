// https://docs.kernel.org/hid/index.html

use usbd_hid::descriptor::generator_prelude::*;

/// See https://usb.org/sites/default/files/hid1_11.pdf to understand how HID works.\
/// See https://usb.org/sites/default/files/hut1_6.pdf for HID usage tables.\
/// See [Wacom Intuos Pro S (3rd-gen) HID descriptor] for example.\
/// See [usbd_hid_macros::spec::try_resolve_constant]
///
/// [Wacom Intuos Pro S (3rd-gen) HID descriptor]: https://github.com/linuxwacom/wacom-hid-descriptors/blob/3dd4a3d41d86a9a51c57d7424af26208d51b9097/Wacom%20Intuos%20Pro%20S%20(3rd-gen)/sysinfo.vS9sFVLdTW/0003%3A056A%3A03F5.0008.hid.txt
#[gen_hid_descriptor(
    // 0x01 = Digitizer
    (usage_page=DIGITIZER, usage=0x01, collection=APPLICATION) = {
        // 0x20 = Stylus
        (usage=0x20, collection=PHYSICAL) = {
            (usage_page=UNDEFINED,) = { #[item_settings data,variable,absolute,no_wrap,linear,preferred,not_null,not_volatile] x=input; };
            (usage_page=UNDEFINED,) = { #[item_settings data,variable,absolute,no_wrap,linear,preferred,not_null,not_volatile] y=input; };
        };
    }
)]
#[derive(Default)]
pub struct Report {
    pub x: u16,
    pub y: u16,
}
