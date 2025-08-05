input.onGesture(Gesture.Shake, function () {
    basic.showNumber(10)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 125), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(100)
    if (true) {
        basic.showString("Hello!")
    } else {
        basic.showString("bye")
        basic.showNumber(6)
    }
})
