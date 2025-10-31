input.onButtonPressed(Button.A, function () {
    DFPlayerPro.MP3_control(DFPlayerPro.ControlType.playPause)
})
let Kette = smartfeldAktoren.createChain(DigitalPin.P0, DigitalPin.P14, 3)
let neueLautstärke = 5
let aktuelleLautstärke = 0
DFPlayerPro.MP3_setSerial(SerialPin.P15, SerialPin.P1)
DFPlayerPro.MP3_ledMode(DFPlayerPro.ledType.ledOn)
DFPlayerPro.MP3_setPlayMode(DFPlayerPro.PlayType.playRandomly)
DFPlayerPro.MP3_control(DFPlayerPro.ControlType.playPause)
basic.forever(function () {
    neueLautstärke = Math.round(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 30))
    if (neueLautstärke != aktuelleLautstärke) {
        aktuelleLautstärke = neueLautstärke
        DFPlayerPro.MP3_setVol(aktuelleLautstärke)
    }
    basic.pause(200)
})
basic.forever(function () {
    Kette.setColorChain(randint(100, 255), 0, randint(50, 255))
    basic.pause(100)
})
