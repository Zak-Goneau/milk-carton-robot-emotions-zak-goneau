input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hi, I'm Neilson!")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})
basic.showIcon(IconNames.Happy)
