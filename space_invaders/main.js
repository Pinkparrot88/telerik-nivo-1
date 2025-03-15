'use strict'

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let ship, cursors, enemy, bullets, background
let a, w, s, d
let speed = 400
let bullet
let explosion
let enemyX
let enemy_bullets
let enemy_bullet
let broqch = 0

function preload() {
    game.load.image('space', 'space_background.jpg')
    game.load.image('bullet', 'bullet.png')
    game.load.image('enemy', 'ship (1).png')
    game.load.image('ship', 'ship (2).png')
    game.load.image('enemy_bullet', 'sphere-blue (2).png')
    game.load.spritesheet('explosion', 'explosion.png', 512/4, 512/4)
    game.load.spritesheet("our_explosion", "explosion.900x900.9x9.png", 900/9, 900/9 )
}

function create() {
    
    background = game.add.tileSprite(0, 0, game.width, game.height, "space")
    background.width = game.world.width
    background.height = game.world.height
    background.autoScroll(200,200)
    
    add_enemy()

    ship = game.add.sprite(750, 790, 'ship')
    game.physics.arcade.enable(ship)
    ship.body.collideWorldBounds = true
    ship.anchor.setTo(0.5)
    ship.scale.setTo(0.8)
    
    cursors = game.input.keyboard.createCursorKeys()
    a = game.input.keyboard.addKey(Phaser.Keyboard.A)
    s = game.input.keyboard.addKey(Phaser.Keyboard.S)
    d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    w = game.input.keyboard.addKey(Phaser.Keyboard.W)

   
   

    bullets = game.add.group()
    bullets.enableBody = true

    enemy_bullets = game.add.group()
    enemy_bullets.enableBody = true
    

}

function update() {

countdown()

   // background.tilePosition.x += 5   //adding tiles position speed for x
   // background.tilePosition.y += 5   //adding tiles position speed for y

   
    if (a.isDown) {ship.body.velocity.x = -speed } 
  
    else if (d.isDown) {ship.body.velocity.x = speed } 

    else {ship.body.velocity.x = 0 }

    
    if (enemy.x >= game.width - enemy.width / 2) { enemy.body.velocity.x = -200 }
   
    else if (enemy.x <= enemy.width / 2) { enemy.body.velocity.x = 200 }

   

    
    game.physics.arcade.collide(ship, enemy_bullets, kill_ship)

    game.physics.arcade.collide(enemy,bullets, kill_enemy)

if (ship.alive === true)
    {game.input.onDown.add(shootBullet) //this is to keep the bullets shooting when the mouse is clicked upon
}

else if (ship.alive === false){
    game.input.onDown.remove(shootBullet) //this is to remove the previously called on function, now rebuking its power when the mouse button is clicked
}
  
   
}



const shootBullet = function() {
    
    bullet = bullets.create(ship.x, ship.y, 'bullet')
    game.physics.arcade.enable(bullet)
    bullet.anchor.set(0.5)
    bullet.scale.setTo(2)
    bullet.body.velocity.y = -500
}
/*
const kill_enemy = function(_bullet, _enemy) {
    _enemy.destroy()
    _bullet.destroy()
    explode()
    add_enemy()
 
}*/

function kill_enemy( _enemy, _bullet) {
    _enemy.kill()
    _bullet.destroy()
    explode()
    add_enemy()
}


function explode(){

explosion = game.add.sprite(enemy.x, enemy.y, "explosion")
explosion.animations.add("explode", [], 15, false).play()
explosion.scale.setTo(2)
explosion.anchor.setTo(0.5)
explosion.events.onAnimationComplete.add(function(){explosion.kill()}) //this is so the last frame of the animation isnt showed and stuck when the whole animation is complete

}

const add_enemy = function(){

    enemyX = game.world.randomX

    enemy = game.add.sprite(enemyX, 50, 'enemy')
    game.physics.arcade.enable(enemy)
    enemy.anchor.setTo(0.5)
    enemy.scale.setTo(0.8)
    enemy.body.velocity.x = 200
}


const enemy_shoot = function(){

    enemy_bullet = enemy_bullets.create(enemy.x, enemy.y, 'enemy_bullet')
    game.physics.arcade.enable(enemy_bullet)
    enemy_bullet.anchor.set(0.5)
    enemy_bullet.scale.setTo(0.1)
    enemy_bullet.body.velocity.y = 200
}



function countdown(){
    broqch++
    if(broqch >= 60 && ship.alive){
        enemy_shoot(), broqch = 0
    }
}


function kill_ship(_ship,_enemy_bullet) {
    _ship.kill()
    _enemy_bullet.kill()

}

/*
const kill_ship = function(_enemy_bullet, _ship) {
    _enemy_bullet.destroy()
    _ship.destroy()
    
 
}
*/
