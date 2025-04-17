let random = 0
input.onGesture(Gesture.Shake, function () {
    random = randint(1, 3)
    if (random == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (random == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
