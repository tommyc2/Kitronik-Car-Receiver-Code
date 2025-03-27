radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 0)
    } else if (receivedNumber == 2) {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 0)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "fdR1") {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 50)
    } else if (receivedString == "fdL1") {
        Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 50)
    }
})
basic.showIcon(IconNames.No)
radio.setGroup(1)
