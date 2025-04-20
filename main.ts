let random = 0
basic.forever(function () {
    random = randint(1, 3)
    if (random == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (random == 2) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
    }
})
