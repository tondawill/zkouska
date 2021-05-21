def on_button_pressed_a():
    global tecka_x
    if not (tecka_x < 1):
        led.unplot(tecka_x, 0)
        led.plot(tecka_x - 1, 0)
        tecka_x += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global tecka_x
    if not (tecka_x > 4):
        led.unplot(tecka_x, 0)
        led.plot(tecka_x + 1, 0)
        tecka_x += 1
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

tecka_x = 0
tecka_x = 0

def on_forever():
    pass
basic.forever(on_forever)
