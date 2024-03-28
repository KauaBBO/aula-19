input.onGesture(Gesture.Shake, function () {
    let x = 0
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
    } else if (x == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
