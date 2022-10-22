irRemote.connectInfrared(DigitalPin.P16)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
let v_button = 0
basic.forever(function () {
    v_button = irRemote.returnIrButton()
    if (v_button != 0) {
        if (v_button == 70) {
            k_Bit.run(DIR.RunBack, 40)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (v_button == 68) {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 15)
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 35)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else if (v_button == 67) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 35)
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 15)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else if (v_button == 21) {
            k_Bit.run(DIR.RunForward, 40)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (v_button == 64) {
            k_Bit.carStop()
            strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        }
    }
})
