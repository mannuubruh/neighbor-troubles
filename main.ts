scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    game.showLongText("Claire: sigh...finally", DialogLayout.Bottom)
    game.showLongText("Claire: Hopefully this was just a weird dream.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`NAP`)
    game.splash("")
    game.showLongText("CRASH!", DialogLayout.Full)
    game.showLongText("Mom:AAAAHH!!!!", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`Claires room no mom`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile100`)
    game.showLongText("Claire: What the heck!?", DialogLayout.Bottom)
    game.showLongText("Claire: Mom?", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("CLaire: I should go check on mom!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Jason room 3`)
    game.showLongText("Claire: So...what's up?", DialogLayout.Bottom)
    game.showLongText("Jason: Wanna cuddle With me and watch the static on my TV?", DialogLayout.Bottom)
    game.showLongText("Claire: WHAT!? EW, NO!", DialogLayout.Bottom)
    game.showLongText("Jason: C'mon! I promise I won't get handsy~", DialogLayout.Bottom)
    game.showLongText("Claire: NO! STAY AWAY FROM ME WEIRDO! IM OUTTA HEAR!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile94`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Outside find who took mom`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile95`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: Look! more foot tracks!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles6, function (sprite, location) {
    game.showLongText("Claire: Oh no!", DialogLayout.Top)
    game.showLongText("Claire: These are the forbidden woods!", DialogLayout.Top)
    game.showLongText("Claire: My Mom warned not to go in there!", DialogLayout.Top)
    game.showLongText("Claire: But if she's lost in there then I have no choice.", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`Forest that doesnt actually have any other paths`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile106`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: Mom was right, it is spooky here.", DialogLayout.Bottom)
    game.showLongText("You hear the ear piercing sound of a microphone.", DialogLayout.Bottom)
    game.showLongText("Jason: Mwahaha! Hello Claire!", DialogLayout.Bottom)
    game.showLongText("Claire: Jason!", DialogLayout.Bottom)
    game.showLongText("Claire: What did you do with my Mom!?", DialogLayout.Bottom)
    game.showLongText("Jason: Oh don't worry.", DialogLayout.Bottom)
    game.showLongText("Jason: she isn't hurt.", DialogLayout.Bottom)
    game.showLongText("Jason: I would never put my hand on a woman in ANY way.", DialogLayout.Bottom)
    game.showLongText("Jason: However...If you cuddle with me and watch the static on my TV I'll consider giving her back to you safely.", DialogLayout.Bottom)
    game.showLongText("Claire: NEVER!!!", DialogLayout.Bottom)
    game.showLongText("Jason: FINE! You chose the hard way!", DialogLayout.Bottom)
    game.showLongText("Jason: Have fun finding me!", DialogLayout.Bottom)
    game.showLongText("Jason: There is no way you will! And there are no TRACKS or MARKINGS that I may have made on an accident that could lead you too me!", DialogLayout.Bottom)
    game.showLongText("Jason: Toodleloo! MWAHAHA- COUGH", DialogLayout.Bottom)
    game.showLongText("Claire: sigh...lets get this over with.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    game.showLongText("You eat the breakfast your mother claimed she had made.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`Kitchen Go OUTSIDE`)
    game.showLongText("It was just a donut that she threw there.", DialogLayout.Bottom)
    game.showLongText("It's been left out for a bit so it's a bit stale", DialogLayout.Bottom)
    game.showLongText("Claire: y'know, I'm just now starting to notice how empty this kitchen is.", DialogLayout.Bottom)
    game.showLongText("Claire: Guess i'll just go back to my room and watch TV.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`Night time`)
    tiles.setCurrentTilemap(tilemap`Definitely not the same house`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile66`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: Hello?", DialogLayout.Bottom)
    game.showLongText("Stinky john: Hey'a kid!", DialogLayout.Bottom)
    game.showLongText("Stinky john: How are 'ya?", DialogLayout.Bottom)
    game.showLongText("Claire: Sigh...fine.", DialogLayout.Bottom)
    game.showLongText("Claire: Where's Jason. my mom told me to hang out with him.", DialogLayout.Bottom)
    game.showLongText("Stinky john: If 'ya lookin' for my son, he's upstairs in his room!", DialogLayout.Bottom)
    game.showLongText("Claire: Thanks...", DialogLayout.Bottom)
    game.showLongText("Stinky john: HAHAHA! No problemo Kid!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile90`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Kitchen after Mom gets got`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile49`)
    game.showLongText("You enter the kitchen to check on your Mom.", DialogLayout.Bottom)
    game.showLongText("But instead you see very conveniently visible and obvious foot tracks.", DialogLayout.Bottom)
    game.showLongText("CLaire: Has Mom been kidnapped!!??", DialogLayout.Bottom)
    game.showLongText("CLaire: Who could have done this? And why?", DialogLayout.Bottom)
    game.showLongText("CLaire: Wait...This foot track looks familiar!", DialogLayout.Bottom)
    game.showLongText("CLaire: ...", DialogLayout.Bottom)
    game.showLongText("CLaire: OH", DialogLayout.Bottom)
    game.showLongText("CLaire: MY", DialogLayout.Bottom)
    game.showLongText("CLaire: GOSH!", DialogLayout.Bottom)
    game.showLongText("CLaire: THESE ARE JASON'S FOOT TRACKS!", DialogLayout.Bottom)
    game.showLongText("CLaire: I need to follow these foot track.", DialogLayout.Bottom)
    game.showLongText("CLaire: It's the only chance I have to find my Mom.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Kitchen after touching grass`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile49`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile91`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Claires room no mom`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile16`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: Today has been to much for me.", DialogLayout.Bottom)
    game.showLongText("Claire: I need some sleep.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Outside`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight4)
    scene.cameraFollowSprite(mySprite)
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
        7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
        7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
        6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
        6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
        6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
        6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
        6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
        66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
        66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
        66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
        66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666665566bbb666666666666
        66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666555666bb666666666666
        6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb6566655566bb666666666666
        6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb556655566bbb66666666666
        6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb95dd556666bb66666666666
        bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd556655bbb6696666666
        bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd955556bbb6699966666
        bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
        bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
        bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
        bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
        bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
        bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
        bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
        bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
        b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
        b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
        b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
        b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
        dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
        9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
        9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
        9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
        9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
        99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
        99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
        9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
        9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
        999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
        d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
        dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
        dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
        ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
        dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
        dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
        d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
        999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
        9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
        d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
        ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
        dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
        ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
        ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
        dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
        ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
        dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
        ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    game.showLongText("Claire: Sigh...", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    game.showLongText("Mom: Where do you think your going?", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`Kitchen Mom angry`)
    game.showLongText("Claire: I'm going back to my room to watch TV.", DialogLayout.Bottom)
    game.showLongText("Mom: Like I said, It's a beautiful day outside. please go out.", DialogLayout.Bottom)
    game.showLongText("Claire: My friend has gone to her Dads house.", DialogLayout.Bottom)
    game.showLongText("Claire: Ill have no one to play with!", DialogLayout.Bottom)
    game.showLongText("Mom: Why don't you go and play with the neighbors kid?", DialogLayout.Bottom)
    game.showLongText("Mom: Now what was his name?", DialogLayout.Bottom)
    game.showLongText("Claire: Jason!?", DialogLayout.Bottom)
    game.showLongText("Mom: Ah yes, Jason. He seems like a nice kid.", DialogLayout.Bottom)
    game.showLongText("Claire: He's a total weirdo!", DialogLayout.Bottom)
    game.showLongText("Mom: Hey!", DialogLayout.Bottom)
    game.showLongText("Mom: There is no need for name calling.", DialogLayout.Bottom)
    game.showLongText("Mom: Go outside.", DialogLayout.Bottom)
    game.showLongText("Claire: Yes ma'am.", DialogLayout.Bottom)
    game.showLongText("Claire: Sorry ma'am.", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`stinky john is gone`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile67`)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile105`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Forest that doesnt actually have any other paths2`)
    game.showLongText("Claire: HEY PLAYER!!", DialogLayout.Bottom)
    game.showLongText("Claire: YEAH, YOU!", DialogLayout.Bottom)
    game.showLongText("Claire: Maybe try following the very obvious foot tracks like we have been?", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Jasons room`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile84`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: uh...Jason?", DialogLayout.Top)
    game.showLongText("Jason: ...", DialogLayout.Top)
    game.showLongText("Claire: Hello?", DialogLayout.Top)
    game.showLongText("Jason: ...", DialogLayout.Top)
    game.showLongText("Claire: HEY JASON!!!!", DialogLayout.Top)
    game.showLongText("Jason: huh?", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`Jason room 2`)
    game.showLongText("Jason: Ah, Claire! I was not notified by Father that we would have guests.", DialogLayout.Top)
    game.showLongText("Jason: Please, forgive me for the mess.", DialogLayout.Top)
    game.showLongText("Claire: ...This room is empty. what are you on about?", DialogLayout.Top)
    game.showLongText("Jason: ...", DialogLayout.Top)
    game.showLongText("Jason: Whatever! Doesn't matter.", DialogLayout.Top)
    game.showLongText("Jason: What brings a pretty girl like you here?", DialogLayout.Top)
    game.showLongText("Claire: uh...My best Friend is at her dads house.", DialogLayout.Top)
    game.showLongText("Claire: so my mom recommended that I hang out with you instead.", DialogLayout.Top)
    game.showLongText("Jason: Are you sure it's not cuz I'm irresistible?", DialogLayout.Top)
    game.showLongText("Claire: 101% sure.", DialogLayout.Top)
    game.showLongText("Jason: UGH! Whatever. Come over here, I got some cool stuff we can do!", DialogLayout.Top)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile109`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Forest stuff`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile106`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Kitchen after touching grass`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile86`)
    scene.cameraFollowSprite(mySprite)
    game.showLongText("Claire: I should go to bed", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Outside run away`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile83`)
    game.showLongText("Claire: Wow! it's late!", DialogLayout.Bottom)
    game.showLongText("Claire: I should get home!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    game.showLongText("Claire: My mom warns me not to go in there.", DialogLayout.Bottom)
    game.showLongText("Claire: She tells me I might get lost.", DialogLayout.Bottom)
    game.showLongText("Claire: Maybe someday i'll head in there.", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`Outside after optional dialog`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Claires room no mom`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("Claire: Hey Mom?", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`funny joke 1`)
    game.showLongText("Mom: Yes Hun?", DialogLayout.Bottom)
    game.showLongText("Claire: Why is this specific door just a Black rectangle?", DialogLayout.Bottom)
    game.showLongText("Mom: I actually don't know.", DialogLayout.Bottom)
    game.showLongText("Claire: Do you think it is cuz the developer of this game was to lazy to draw an original door sprite and in turn, made this poorly written joke as an excuse to not draw one?", DialogLayout.Bottom)
    game.showLongText("Mom: ...", DialogLayout.Bottom)
    game.showLongText("Mom: sure! (whatever makes you happy)", DialogLayout.Bottom)
    game.showLongText("Mom: Now go eat Hun.", DialogLayout.Bottom)
    game.showLongText("Claire: OK!", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`kitchen donut`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile49`)
})
let mySprite: Sprite = null
game.splash("Hello?")
game.splash("Can you hear me?")
game.splash("...")
game.splash("Good.")
game.splash("very Good.")
game.splash("it is nice")
game.splash("When things go as planned")
game.splash("...")
game.splash("It is time")
game.splash("to make your character")
game.splash("...")
game.splash("I lied.")
game.splash("makecode wont allow it")
game.splash("Cry about it LoL")
game.splash("Ahem...")
game.splash("anyway,")
game.splash("your")
game.splash("name")
game.splash("Is")
game.showLongText("CLAIRE!!!", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 e b 3 e e 3 b e 3 f . . 
    . . f 3 f f e e e e f f 3 f . . 
    . . f b f b f e e f b f b f . . 
    . . f b e 1 f 4 4 f 1 e b f . . 
    . . f b f 4 4 4 4 4 4 f b f . . 
    . . f f f f e e e e f f f f . . 
    . . e e f b d d d d b f e e . . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`game start`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
game.showLongText("Mom: Claire, wake up!", DialogLayout.Bottom)
game.showLongText("Mom: Its a beautiful day outside and your wasting it all laying in bed.", DialogLayout.Bottom)
game.showLongText("Mom: Get up, lazy bones!", DialogLayout.Bottom)
game.showLongText("Clair: yes ma'am.", DialogLayout.Bottom)
game.showLongText("Mom: I made you breakfast. it is waiting in the kitchen.", DialogLayout.Bottom)
game.showLongText("Claire: Thank you mom!", DialogLayout.Bottom)
