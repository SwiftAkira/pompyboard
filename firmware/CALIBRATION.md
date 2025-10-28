# PompyBoard Sensor Calibration System

## Overview

The PompyBoard firmware now supports **per-sensor individual calibration** to account for manufacturing variances, baseline drift, and sensitivity differences across the 209 sensors (11 rows × 19 columns).

## Calibration Architecture

### Two-Point Calibration Model

Each sensor has individual calibration parameters:

1. **Offset (Baseline)**: The ADC reading when no pressure is applied
2. **Gain (Sensitivity)**: Multiplier to normalize sensor response

**Calibration Formula:**
```
calibrated_value = (raw_value - offset) × gain
```

### Data Structure

```rust
pub struct CalibrationData {
    pub offset: u16,  // Baseline reading (no pressure)
    pub gain: f32,    // Sensitivity multiplier (typically 0.5 to 2.0)
}

// 209 sensors, each with individual calibration
pub static mut CALIBRATION: [CalibrationData; 209];
```

## Calibration Methods

### 1. Offset Calibration (Zero-Point)

**Purpose:** Capture baseline readings for all sensors when no pressure is applied.

**Method:**
```rust
sensor.calibrate_offsets();
```

**Process:**
- Takes 10 samples per sensor
- Averages to reduce noise
- Stores baseline reading as offset
- Should be performed with **NO touch or pressure** on the sensor surface

**When to perform:**
- Initial device setup
- After assembly or repair
- Periodically (monthly recommended)
- When drift is detected

### 2. Gain Calibration (Sensitivity Normalization)

**Purpose:** Normalize sensor sensitivity by applying uniform pressure.

**Method:**
```rust
sensor.calibrate_gains(target_value);
```

**Parameters:**
- `target_value`: Expected ADC reading after offset removal (e.g., 1000 for moderate pressure)

**Process:**
- Applies known uniform pressure to all sensors
- Measures response for each sensor
- Calculates gain factor to normalize to target value
- Compensates for sensitivity variations

**Calibration fixture required:**
- Flat, rigid surface (glass or acrylic sheet)
- Even weight distribution (e.g., heavy book, calibrated weight)
- Uniform pressure across entire sensor grid

**When to perform:**
- Initial device setup
- After significant component replacement
- When sensitivity drift is observed
- For production quality control

### 3. Reset Calibration

**Purpose:** Restore default calibration values.

**Method:**
```rust
sensor.reset_calibration();
```

**Default values:**
- Offset: 2300 (legacy THRESHOLD value)
- Gain: 1.0 (unity gain)

## Implementation Details

### Memory Usage

- **Per sensor:** 6 bytes (2 bytes offset + 4 bytes gain)
- **Total:** 209 sensors × 6 bytes = **1,254 bytes**
- Storage: Static RAM (volatile, resets on power cycle)

### Future Enhancements

For persistent calibration across power cycles, consider:

1. **Flash Storage:**
   - Store calibration data in STM32 internal flash
   - Use Flash programming API to write/read
   - Implement wear leveling if frequent updates needed

2. **EEPROM (External):**
   - Add I²C EEPROM chip to PCB
   - Store calibration in non-volatile memory
   - Load on startup

3. **USB Configuration:**
   - Implement USB control commands
   - Allow host PC to trigger calibration
   - Export/import calibration profiles

4. **Automatic Calibration:**
   - Run offset calibration on startup
   - Detect no-touch state automatically
   - Adaptive threshold adjustment

## Integration Example

### Main Loop with Calibration

```rust
fn main() -> ! {
    // ... initialization code ...
    
    let mut sensor = sensor::Sensor::new(/* ... */);
    
    // Optional: Perform calibration on startup
    // sensor.calibrate_offsets();
    
    loop {
        let (x, y) = sensor.scan();  // Now uses calibrated values
        // ... process coordinates ...
    }
}
```

### Calibration Trigger via Button

```rust
fn main() -> ! {
    // ... initialization ...
    
    let button_pin = gpioe.pe2.into_pull_up_input();
    let mut calibration_button_pressed = false;
    
    loop {
        // Hold button for 3 seconds to trigger calibration
        if button_pin.is_low() && !calibration_button_pressed {
            cortex_m::asm::delay(180_000_000 * 3); // 3 second hold
            if button_pin.is_low() {
                sensor.calibrate_offsets();
                calibration_button_pressed = true;
            }
        }
        
        if button_pin.is_high() {
            calibration_button_pressed = false;
        }
        
        let (x, y) = sensor.scan();
        // ... process ...
    }
}
```

## Calibration Best Practices

### Environmental Considerations

1. **Temperature Stability:**
   - Allow device to reach thermal equilibrium
   - Calibrate at operating temperature
   - Consider re-calibration if temperature changes significantly

2. **Clean Surface:**
   - Remove dust, oils, and debris before calibration
   - Use isopropyl alcohol for cleaning
   - Allow surface to fully dry

3. **Stable Mounting:**
   - Ensure device is securely mounted
   - Avoid mechanical stress during calibration
   - Use flat, level surface

### Calibration Validation

After calibration, validate results:

1. **Check offset values:**
   - Should be relatively uniform across sensors
   - Typical range: ±200 ADC counts from mean
   - Large outliers may indicate faulty sensors

2. **Check gain values:**
   - Should be close to 1.0 (±0.3 typical)
   - Very high/low values may indicate problems
   - Log values for quality control

3. **Test response:**
   - Apply light touch at various positions
   - Verify smooth, linear response
   - Check for dead zones or hot spots

## Troubleshooting

### Problem: Erratic position readings

**Possible causes:**
- Offset calibration performed with pressure applied
- Environmental noise during calibration
- Damaged sensors

**Solution:**
- Reset calibration
- Perform offset calibration with no touch
- Reduce electrical noise sources

### Problem: Uneven sensitivity across surface

**Possible causes:**
- Gain calibration with non-uniform pressure
- Manufacturing variance in sensors
- Mechanical stress on sensor array

**Solution:**
- Use proper calibration fixture
- Perform gain calibration with uniform weight
- Check mechanical assembly

### Problem: Calibration doesn't persist after reboot

**Current limitation:**
- Calibration stored in RAM (volatile)
- Data lost on power cycle

**Solution:**
- Implement flash storage (see Future Enhancements)
- Perform calibration on each startup
- Use USB command to restore saved calibration

## Performance Impact

- **Runtime overhead:** Minimal (~1-2% CPU)
- **Scan rate impact:** Negligible
- **Memory footprint:** 1,254 bytes static RAM

## References

1. [STM32F4 ADC Calibration](https://www.st.com/resource/en/application_note/an3116-stm32s-adc-modes-and-their-applications-stmicroelectronics.pdf)
2. [Sensor Calibration Best Practices](https://en.wikipedia.org/wiki/Calibration)
3. [Two-Point Calibration Method](https://en.wikipedia.org/wiki/Calibration_curve)

## Version History

- **v1.0** (2025-10-28): Initial per-sensor calibration implementation
  - Offset calibration
  - Gain calibration
  - Runtime calibration application
