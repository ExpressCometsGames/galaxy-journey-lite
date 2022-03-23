input.onButtonPressed(Button.A, function on_button_pressed_a() {
    sprite.change(LedSpriteProperty.X, -1)
    lazer.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.pause(100)
    for (let index = 0; index < 5; index++) {
        lazer.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (lazer.get(LedSpriteProperty.Y) == 0) {
        lazer.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        lazer.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    sprite.change(LedSpriteProperty.X, 1)
    lazer.change(LedSpriteProperty.X, 1)
})
let lazer : game.LedSprite = null
let sprite : game.LedSprite = null
sprite = game.createSprite(2, 4)
let other_spaceship = game.createSprite(randint(0, 4), 0)
let evil_spaceship = game.createSprite(randint(0, 4), 0)
lazer = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
game.setScore(0)
basic.forever(function on_forever() {
    if (sprite.isTouching(evil_spaceship)) {
        game.gameOver()
    }
    
    if (sprite.isTouching(other_spaceship)) {
        game.gameOver()
    }
    
    if (other_spaceship.isTouching(lazer)) {
        game.addScore(1)
        other_spaceship.set(LedSpriteProperty.Y, 0)
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    }
    
    if (evil_spaceship.isTouching(lazer)) {
        game.addScore(1)
        evil_spaceship.set(LedSpriteProperty.Y, 0)
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    }
    
})
basic.forever(function on_forever2() {
    for (let index2 = 0; index2 < 5; index2++) {
        other_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
basic.forever(function on_forever3() {
    for (let index3 = 0; index3 < 5; index3++) {
        evil_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
basic.forever(function on_forever4() {
    if (other_spaceship.get(LedSpriteProperty.Y) == 4) {
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        other_spaceship.set(LedSpriteProperty.Y, 0)
    }
    
})
basic.forever(function on_forever5() {
    if (evil_spaceship.get(LedSpriteProperty.Y) == 4) {
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        evil_spaceship.set(LedSpriteProperty.Y, 0)
    }
    
})
