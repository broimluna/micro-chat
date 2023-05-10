input.onButtonPressed(Button.A, function () {
    radio.sendString("micro:chat")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . # . .
        # # # . .
        # . # . .
        # # # # #
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.showIcon(IconNames.Diamond)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showLeds(`
        # # # # #
        # . # . .
        # # # . .
        # . # . .
        # # # # #
        `)
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
        basic.pause(500)
    }
    basic.showString(receivedString)
    basic.showLeds(`
        # # # # #
        # . # . .
        # # # . .
        # . # . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("micro:chat:b")
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . # . .
        # # # . .
        # . # . .
        # # # # #
        `)
})
radio.setGroup(1)
basic.showLeds(`
    # # # # #
    # . # . .
    # # # . .
    # . # . .
    # # # # #
    `)
