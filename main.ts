namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ball`, mySprite, 0, -100)
    pause(3000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Hoop, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(3000)
})
info.onScore(10, function () {
    game.over(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
mySprite.setPosition(73, 101)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(assets.image`hoop`, SpriteKind.Hoop)
mySprite2.setPosition(80, 7)
info.setLife(3)
