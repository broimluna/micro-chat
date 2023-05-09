def on_button_pressed_a():
    radio.send_string("assbrat")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.set_group(1)
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)
