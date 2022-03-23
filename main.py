def on_button_pressed_a():
    sprite.change(LedSpriteProperty.X, -1)
    lazer.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.pause(100)
    for index in range(5):
        lazer.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    if lazer.get(LedSpriteProperty.Y) == 0:
        lazer.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        lazer.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    sprite.change(LedSpriteProperty.X, 1)
    lazer.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

lazer: game.LedSprite = None
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 4)
other_spaceship = game.create_sprite(randint(0, 4), 0)
evil_spaceship = game.create_sprite(randint(0, 4), 0)
lazer = game.create_sprite(sprite.get(LedSpriteProperty.X),
    sprite.get(LedSpriteProperty.Y))
game.set_score(0)

def on_forever():
    if sprite.is_touching(evil_spaceship):
        game.game_over()
    if sprite.is_touching(other_spaceship):
        game.game_over()
    if other_spaceship.is_touching(lazer):
        game.add_score(1)
        other_spaceship.set(LedSpriteProperty.Y, 0)
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    if evil_spaceship.is_touching(lazer):
        game.add_score(1)
        evil_spaceship.set(LedSpriteProperty.Y, 0)
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
basic.forever(on_forever)

def on_forever2():
    for index2 in range(5):
        other_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    for index3 in range(5):
        evil_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
basic.forever(on_forever3)

def on_forever4():
    if other_spaceship.get(LedSpriteProperty.Y) == 4:
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        other_spaceship.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever4)

def on_forever5():
    if evil_spaceship.get(LedSpriteProperty.Y) == 4:
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        evil_spaceship.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever5)
