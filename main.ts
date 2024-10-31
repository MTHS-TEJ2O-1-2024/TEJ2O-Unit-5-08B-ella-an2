/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program knows when to stop and go
*/

// variables
let distanceToObject: number

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)

// to get the distance
distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)
basic.showString((distanceToObject).toString())

// make the wheel to move
while (distanceToObject >= 10) {
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
    basic.pause(500)
    robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)

    // to get the distance again
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
}
