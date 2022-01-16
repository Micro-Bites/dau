let dau = 0
input.onGesture(Gesture.Shake, function () {
    dau = randint(1, 6)
    basic.showNumber(dau)
})
