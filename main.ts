input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Kette = smartfeldAktoren.createChain(DigitalPin.P0, DigitalPin.P14, 3)
basic.forever(function () {
    Kette.setColorChain(randint(100, 255), 0, randint(50, 255))
    basic.pause(100)
})
