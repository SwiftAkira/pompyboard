# PompyBoard PCB

Designed with [KiCad][kicad].

## Manufacturing

Both prototype and production PCB is manufactured by [JLCPCB][jlcpcb].

### Steps

1. Install [KiCad][kicad].
2. Install the [Fabrication Toolkit][fab-toolkit] plugin.
3. "Generate" production files using the plugin with default settings.
4. Go to [jlcpcb.com][jlcpcb] and click "Add gerber file"
5. Select `pcb/production/pompyboard.zip`
6. Configure PCB (you will get 5 pcb of which 2 have components soldered)
   - PCB Specifications
     - Surface Finish - LeadFree HASL (health is important boiz)
   - High-spec Options
     - Confirm Production file - Yes
     - Mark on PCB - Order Number(Specify Position)
   - PCB Assembly
     - PCBA Qty - minimum is 2
     - Confirm Parts Placement - Yes
7. Press SAVE TO CART
8. Upload `pcb/production/bom.csv` and `pcb/production/positions.csv`
9. Fix component placement
   - J2 (1x4 pin)
   - U231 (voltage regulator)

[kicad]: https://www.kicad.org/
[jlcpcb]: https://jlcpcb.com/
[fab-toolkit]: https://github.com/bennymeg/Fabrication-Toolkit
