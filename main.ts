basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            robit.MotorStopAll()
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            robit.MotorRunDual(
            robit.Motors.M1,
            100,
            robit.Motors.M2,
            100
            )
            basic.pause(2250)
            robit.MotorStopAll()
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            robit.MotorRunDual(
            robit.Motors.M1,
            -75,
            robit.Motors.M2,
            75
            )
            basic.pause(250)
        }
        robit.MotorStopAll()
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        robit.MotorRunDual(
        robit.Motors.M1,
        100,
        robit.Motors.M2,
        -100
        )
        basic.pause(2000)
    } else {
        robit.MotorStopAll()
    }
})
