// When button A is pressed it will be shocked.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})
// When button A + B is pressed it will intorduce itself.
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hi, I'm Neilson!")
    basic.showIcon(IconNames.Happy)
})
// When button B is pressed it will sleep.
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
// When shaken it will become angry.
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Angry)
        basic.pause(2000)
        basic.showIcon(IconNames.Happy)
    }
})
// Starts with happy face.
basic.showIcon(IconNames.Happy)
