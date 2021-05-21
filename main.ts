input.onButtonPressed(Button.A, function () {
    led.unplot(tecka_x, tecka_y)
    if (tecka_x > 0) {
        led.plot(tecka_x - 1, tecka_y)
        tecka_x += -1
    } else {
        if (tecka_y > 0) {
            tecka_x = 4
            tecka_y += -1
            led.plot(tecka_x, tecka_y)
        } else {
            led.plot(tecka_x, tecka_y)
            soundExpression.giggle.play()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(tecka_x, tecka_y)
    if (tecka_x < 4) {
        led.plot(tecka_x + 1, tecka_y)
        tecka_x += 1
    } else {
        if (tecka_y < 4) {
            tecka_x = 0
            tecka_y += 1
            led.plot(tecka_x, tecka_y)
        } else {
            led.plot(tecka_x, tecka_y)
            soundExpression.happy.play()
        }
    }
})
let tecka_y = 0
let tecka_x = 0
tecka_x = 0
tecka_y = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
	
})
