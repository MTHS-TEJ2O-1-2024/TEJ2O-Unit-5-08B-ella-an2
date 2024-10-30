/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program knows when to stop and go
*/

// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)

distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)

// make the wheel to move
while (distanceToObject >= 10) {
    basic.pause(500)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
    robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B0)
    basic.pause(500) 

}

