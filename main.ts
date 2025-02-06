scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("Claire: Hey Mom?", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level1`)
    game.showLongText("Mom: Yes hun?", DialogLayout.Bottom)
    game.showLongText("Claire: Why is the door just a Black rectangle?", DialogLayout.Bottom)
    game.showLongText("Mom: I actually don't know.", DialogLayout.Bottom)
    game.showLongText("Claire: Do you think it is cuz the developer of this game was to lazy to draw an original door sprite and in turn made this poorly written joke as an excuse to not draw one?", DialogLayout.Bottom)
    game.showLongText("Mom: ...", DialogLayout.Bottom)
    game.showLongText("Mom: sure. what ever makes you happy.", DialogLayout.Bottom)
    game.showLongText("Mom: Now go eat please.", DialogLayout.Bottom)
    game.showLongText("Claire: OK!", DialogLayout.Bottom)
})
game.splash("Hello?")
game.splash("Can you hear me?")
game.splash("...")
game.splash("Good.")
game.splash("very Good.")
game.splash("Listen closely.")
game.splash("when you wake up.")
game.splash("weird thing will happen.")
game.splash("I cant specify what.")
game.splash("but it will be weird.")
game.splash("your")
game.splash("name")
game.splash("Is")
game.showLongText("CLAIRE!!!", DialogLayout.Bottom)
let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
game.showLongText("Mom: Claire, wake up!", DialogLayout.Bottom)
game.showLongText("Mom: Its a beautiful day outside and your wasting it all laying in bed.", DialogLayout.Bottom)
game.showLongText("Mom: Get up lazy bones!", DialogLayout.Bottom)
game.showLongText("Clair: yes ma'am.", DialogLayout.Bottom)
game.showLongText("Mom: I made you breakfast. it is waiting in the kitchen.", DialogLayout.Bottom)
game.showLongText("Claire: Thank you mom!", DialogLayout.Bottom)
