'use strict'
const game = new Phaser.Game(1000, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
    game.load.tilemap("tilemap", "Tile_Map.json", null, Phaser.Tilemap.TILED_JSON)
    game.load.image("tileset", "tileset.png")
    game.load.spritesheet("fox", "Fox Sprite Sheet.png", 448 / 14, 224 / 7)
    game.load.image("sky", "1.png")
    game.load.image("cloudback", "2.png")
    game.load.image("cloudfront", "3.png")
    game.load.spritesheet('coin', 'coin (1).png',1198/5,704/2)
    game.load.spritesheet('pink_NPC', 'Pink_Monster_Idle_4.png',128/4,32/1)
    game.load.spritesheet('white_NPC', 'Owlet_Monster_Idle_4.png',128/4,32/1)
    game.load.spritesheet('blue_NPC', 'Dude_Monster_Idle_4.png',128/4,32/1)
    game.load.spritesheet('fire', 'Fire+Sparks-Sheet.png',384/4,480/5)
    game.load.spritesheet('falling_stars', '—Pngtree—gold pixel star rating icons_20354803.png',2500/2,2500/2)
    game.load.image("platform", "Credits2.png")
    game.load.spritesheet('kitsune', 'Kitsune.png',1024/8,128/1)
    game.load.image("potion", "Icon35.png")
}

let text
let update_counter = 0
let map
let collision_layer, through_back, through_infront, mostback_trees, finalback_trees, hidden_pathway
let fox
let a, s, w, d
let coin_counter = 0
let speed = 500
let sky
let cloud1, cloud2
let coin, coin1, coin2, coin3, coin4
let npcpink
let npcwhite
let npcblue
let fire
let star
let stars
let platforms
let platform
let plat, plat1, plat2, plat3, plat4, plat5, tree_collision, sparkle_collision, rock
let npcpink2
let npcwhite2
let star1, star2, star3, star4, star5
let kitsune
let potion
let text1

function create() {
    sky = game.add.tileSprite(0, 0, game.width, game.height, "sky")
    sky.autoScroll(50, 0)
    sky.tileScale.y = game.height / sky.texture.height
    sky.fixedToCamera = true

    cloud1 = game.add.tileSprite(0, 0, game.width, game.height, "cloudback")
    cloud1.autoScroll(3, 0)
    cloud1.tileScale.y = game.height / cloud1.texture.height
    cloud1.tileScale.x = (game.width / cloud1.texture.width) - 4.6
    cloud1.fixedToCamera = true

    map = game.add.tilemap("tilemap")
    map.addTilesetImage("tileset", "tileset")



    collide_ground_platforms()
    collision_layer = map.createLayer(0)
    through_back = map.createLayer(2)

    pinknpc()
    pinknpc_2()
    bluenpc()
    whitenpc_2()
    fire_riddle_answer()
    add_fox()
    stars_spawn()

    through_infront = map.createLayer(1)
    mostback_trees = map.createLayer(3)
    whitenpc()
    finalback_trees = map.createLayer(4)
    hidden_pathway = map.createLayer(5)

    moneta()


    potion = game.add.sprite(11330, -50, "potion")
    potion.scale.setTo(2)
    potion.anchor.set(0.5)
    game.physics.arcade.enable(potion)
    potion.body.velocity.y = 0
   



    collision_layer.scale.set(5, 5)
    through_back.scale.set(5, 5)
    through_infront.scale.set(5, 5)
    mostback_trees.scale.set(5, 5)
    finalback_trees.scale.set(5, 5)
    hidden_pathway.scale.set(5, 5)


    game.world.setBounds(0, 0, 12000, 800)

    game.physics.arcade.enable(fox)
    fox.body.collideWorldBounds = true
    fox.body.gravity.y = 800

    game.input.keyboard.createCursorKeys()

    a = game.input.keyboard.addKey(Phaser.Keyboard.A)
    s = game.input.keyboard.addKey(Phaser.Keyboard.S)
    d = game.input.keyboard.addKey(Phaser.Keyboard.D)
    w = game.input.keyboard.addKey(Phaser.Keyboard.W)

    map.setCollisionByExclusion([])

    const myStyle = {
        font: '50px Tahoma',
        fill: '#eb9191',
        align: 'center',
        stroke: '#DC143C',
        strokeThickness: 4
    }

    text = game.add.text(120, 30, "Coins collected: " + coin_counter + "/5", myStyle)
    text.anchor.setTo(0.5)
    text.scale.setTo(0.5)
    game.physics.arcade.enable(text)
    text.fixedToCamera = true
    text.cameraOffset.setTo(120, 30)

    npcpink.inputEnabled = true
    npcpink.input.pixelPerfectOver = true
    npcpink.input.pixelPerfectClick = true
    npcpink.clicked = false

    npcpink.events.onInputDown.add(function() {
        alert("A coin in hand, your quest begins, but to succeed, you must win more within. Climb the stars, reach for the sky, the first gold coin is waiting high")

        if (npcpink.clicked == false) {
            coin_counter += 1   
            text.setText("Coins collected: " + coin_counter + "/5") 
            npcpink.clicked = true
        }
    })

    npcwhite.inputEnabled = true
    npcwhite.input.pixelPerfectOver = true
    npcwhite.input.pixelPerfectClick = true

    npcwhite.events.onInputDown.add(function() {
        alert("The rain falls hard—dont let it sting! Dodge the drops, let fortune cling.")
    })

    npcblue.inputEnabled = true
    npcblue.input.pixelPerfectOver = true
    npcblue.input.pixelPerfectClick = true
    npcblue.clicked = false

    npcblue.events.onInputDown.add(function() {
        if (npcblue.clicked == false) {
            npcblue.clicked = true
        }

        alert("A riddle next, both sharp and wise, find the hidden item—trust your eyes! Click it fast to claim your prize.")
        alert("I have no life, but I can die. I flicker, dance, and reach the sky. Feed me well, and I will grow, but give me water, and I'll go. What am I?")
    })


    npcpink2.inputEnabled = true
    npcpink2.input.pixelPerfectOver = true
    npcpink2.input.pixelPerfectClick = true
    npcpink2.clicked = false

    npcpink2.events.onInputDown.add(function() {
        alert("A hidden path, a cave so deep, where secrets lie and shadows creep.")
    })




    fire.inputEnabled = true
    fire.input.pixelPerfectOver = true
    fire.input.pixelPerfectClick = true

    fire.events.onInputDown.add(function() {
        if (npcblue.clicked === true && fire.clicked === false) {
            coin_counter += 1   
            text.setText("Coins collected: " + coin_counter + "/5") 
            fire.clicked = true
            alert("The flames flicker, the answer glows— you've found the truth that knowledge shows! A coin appears, your wit shines bright, take it now, you've won this fight!")
        }
    })





    npcwhite2.inputEnabled = true
    npcwhite2.input.pixelPerfectOver = true
    npcwhite2.input.pixelPerfectClick = true


    npcwhite2.events.onInputDown.add(function() {
        if (coin_counter == 5 && potion.y <= -50 ) {
              potion.body.velocity.y = 100
            
            alert("Through trials fierce, through stars and rain, youve faced the challenge, felt the strain. The coins you've gathered, shining bright, have led you to this final light. A veil now lifts, the truth is shown, no mere adventurer—youve truly grown! Your real form shines, your fate set free, the legend lives… in you and me!")
        }
       
        else {
            alert(" Youve come so far, but wait—beware! Some coins still hide—go find them there. Turn back now, explore once more, then claim the prize you're searching for!")
        }
    
        
    })





   potion.inputEnabled = true
    potion.input.pixelPerfectOver = true
    potion.input.pixelPerfectClick = true
    potion.clicked = false


    potion.events.onInputDown.add(function() {
        if ( potion.y >= 675 && potion.clicked === false) {
            add_kitsune()
            potion.clicked = true
        }
       
        
        
    })

  

}

function update() {
    

    let isMoving = false
    fox.body.velocity.x = 0

    game.physics.arcade.collide(fox, collision_layer)
    game.physics.arcade.collide(fox, coin1, collectCoin)
    game.physics.arcade.collide(fox, coin2, collectCoin)
    game.physics.arcade.collide(fox, coin3, collectCoin_1)
    game.physics.arcade.collide(fox, plat, jump)
    game.physics.arcade.collide(fox, plat1, jump)
    game.physics.arcade.collide(fox, plat2, jump)
    game.physics.arcade.collide(fox, plat3, jump)
    game.physics.arcade.collide(fox, plat4, jump)
    game.physics.arcade.collide(fox, plat5, jump)
    game.physics.arcade.collide(fox, tree_collision, jump)
    game.physics.arcade.collide(fox, sparkle_collision, jump)
    game.physics.arcade.collide(fox, rock, jump)
    game.physics.arcade.collide(fox, stars, fox_deport)

game.physics.arcade.collide(npcpink, plat )
game.physics.arcade.collide(npcwhite, plat )
game.physics.arcade.collide(npcblue, plat )
game.physics.arcade.collide(npcpink2, tree_collision )
game.physics.arcade.collide(npcwhite2, plat )

game.physics.arcade.collide(kitsune, plat, Final_win)
  


if (potion.y >= 675) {
    potion.body.velocity.y = 0; // Stop potion
}





 if (d.isDown) {
        fox.body.velocity.x = speed
        fox.scale.x = 5
        fox.animations.play("foxwalk")
        isMoving = true
    } else if (a.isDown) {
        fox.scale.x = -5
        fox.body.velocity.x = -speed
        fox.animations.play("foxwalk")
        isMoving = true
    } else {
        fox.body.velocity.x = 0
    }

    if (isMoving == false) {
        fox.animations.play("still")
    }

   





if (star1.y >= 800){star1.body.velocity.y = -1000}
else if(star1.y <= 0){star1.body.velocity.y = 1000}

if (star2.y >= 800){star2.body.velocity.y = -1200}
else if(star2.y <= 0){star2.body.velocity.y = 1200}

if (star3.y >= 800){star3.body.velocity.y = -1300}
else if(star3.y <= 0){star3.body.velocity.y = 1300}

if (star4.y >= 800){star4.body.velocity.y = -1100}
else if(star4.y <= 0){star4.body.velocity.y = 1100}





}



function collectCoin_1(_, _coins){

    _coins.kill()
    coin_counter += 1
    text.setText("Coins collected: " + coin_counter + "/5")
    
    alert("Through the storm, youve made it through, the coin is yours—a prize well due!")
    

}

function fox_deport(_fox, _star) {
  //  _star.kill()
    _fox.x = game.width / 2
    _fox.y = game.height / 2
    _fox.body.velocity.x = 0
    _fox.body.velocity.y = 0
}

function add_fox() {
    fox = game.add.sprite(game.width / 2, game.height / 2, "fox")
    fox.animations.add("foxjump", [44, 45, 46, 47, 48], 6, false)
    fox.animations.add("foxwalk", [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], 20, true)
    fox.animations.add("still", [0, 1, 2, 3], 6, true)
    fox.scale.setTo(5)
    fox.anchor.set(0.5)
    game.camera.follow(fox)
}


function add_kitsune(){
    kitsune = game.add.sprite(11330, 10, "kitsune")
    kitsune.scale.x = -3
    kitsune.scale.y = 3
    kitsune.anchor.set(0.5)
    kitsune.animations.add("kitsunestance", [0,1,2,3,4,5,6,7], 10, true).play()
    game.physics.arcade.enable(kitsune)
    kitsune.body.collideWorldBounds = true
    kitsune.body.gravity.y =20

   
}



const fire_riddle_answer = function() {
    fire = game.add.sprite(30, 670, "fire")
    fire.animations.add("chill", [0, 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true).play()
    fire.scale.setTo(2)
    fire.anchor.setTo(0.5)
    fire.clicked = false
}

const moneta = function() {  
    coin1 = game.add.sprite(1400, 140, 'coin')
    coin2 = game.add.sprite(8800, 650, 'coin')
    coin3 = game.add.sprite(4660, 590, 'coin')
    coin = game.add.group()
    coin.add(coin1)
    coin.add(coin2)
    coin.add(coin3)
    coin.forEach(function(allcoins) {
        allcoins.animations.add('spin', [], 10, true)
        allcoins.animations.play('spin')
        allcoins.scale.setTo(0.15)
    })
    game.physics.arcade.enable(coin)
}

const stars_spawn = function() {  
    star1 = game.add.sprite(3050, 20, 'falling_stars')
    star2 = game.add.sprite(3350, 30, 'falling_stars')
    star3 = game.add.sprite(3650, 40, 'falling_stars')
    star4 = game.add.sprite(3950, 50, 'falling_stars')
    stars = game.add.group()
    stars.add(star1)
    stars.add(star2)
    stars.add(star3)
    stars.add(star4)
    stars.forEach(function(allstars) {
        allstars.animations.add('sparkle', [], 10, true)
        allstars.animations.play('sparkle')
        allstars.scale.setTo(0.05)
        game.physics.arcade.enable(allstars)
        allstars.body.velocity.y = 200
    })
   
}





const pinknpc = function() {
    npcpink = game.add.sprite(1150, 500, "pink_NPC")
    npcpink.animations.add("chill", [0, 1, 2, 3], 5, true).play()
    npcpink.scale.x = -3
    npcpink.scale.y = 3
    npcpink.anchor.setTo(0.5)
    game.physics.arcade.enable(npcpink)
    npcpink.body.collideWorldBounds = true
    npcpink.body.gravity.y = 800
}

const whitenpc = function() {
    npcwhite = game.add.sprite(2450, 500, "white_NPC")
    npcwhite.animations.add("chill", [0, 1, 2, 3], 5, true).play()
    npcwhite.scale.x = -3
    npcwhite.scale.y = 3
    npcwhite.anchor.setTo(0.5)
    game.physics.arcade.enable(npcwhite)
    npcwhite.body.collideWorldBounds = true
    npcwhite.body.gravity.y = 800
}

const bluenpc = function() {
    npcblue = game.add.sprite(5680, 500, "blue_NPC")
    npcblue.animations.add("chill", [0, 1, 2, 3], 5, true).play()
    npcblue.scale.x = -3
    npcblue.scale.y = 3
    npcblue.anchor.setTo(0.5)
    game.physics.arcade.enable(npcblue)
    npcblue.body.collideWorldBounds = true
    npcblue.body.gravity.y = 800
    npcblue.clicked = false
}

const pinknpc_2 = function() {
    npcpink2 = game.add.sprite(6980, 500, "pink_NPC")
    npcpink2.animations.add("chill", [0, 1, 2, 3], 5, true).play()
    npcpink2.scale.x = -3
    npcpink2.scale.y = 3
    npcpink2.anchor.setTo(0.5)
    game.physics.arcade.enable(npcpink2)
    npcpink2.body.collideWorldBounds = true
    npcpink2.body.gravity.y = 800
}

const whitenpc_2 = function() {
    npcwhite2 = game.add.sprite(11088, 500, "white_NPC")
    npcwhite2.animations.add("chill", [0, 1, 2, 3], 5, true).play()
    npcwhite2.scale.x = -3
    npcwhite2.scale.y = 3
    npcwhite2.anchor.setTo(0.5)
    game.physics.arcade.enable(npcwhite2)
    npcwhite2.body.collideWorldBounds = true
    npcwhite2.body.gravity.y = 800
}



const collectCoin = function(_, _coins) {
    _coins.kill()
    coin_counter += 1
    text.setText("Coins collected: " + coin_counter + "/5") 
}



const jump = function(){       //this is where I make the function that helps my character jump
    if (w.isDown)
        {fox.body.velocity.y = -500,  fox.animations.play("foxjump")}
}


 






const collide_ground_platforms = function(){
    plat = game.add.group()
    plat.create(0, 762, 'platform')
    plat.create(4000, 762, 'platform')
   plat.create(9000, 762, 'platform')
    plat.create(7000, 762, 'platform')
    plat.setAll('scale.x', 100)
    plat.setAll('scale.y', 0.5)
    game.physics.arcade.enable(plat)
    plat.setAll('body.immovable', true)


    plat1 = game.add.group()
    plat1.create(1963, 590, 'platform')
    plat1.create(9100, 600, 'platform')
    plat1.setAll('scale.x', 3.9)
    plat1.setAll('scale.y', 0.5)
    game.physics.arcade.enable(plat1)
    plat1.setAll('body.immovable', true)


tree_collision = game.add.group()
tree_collision.create(970,200,'platform')
tree_collision.create(6900, 725, 'platform')
    tree_collision.setAll('scale.x', 8)
    tree_collision.setAll('scale.y', 0.5)
    game.physics.arcade.enable(tree_collision)
    tree_collision.setAll('body.immovable', true)
    



    plat2 = game.add.sprite(1600,238,"platform")
    plat2.width=210
    plat2.height=10
    game.physics.arcade.enable(plat2)
    plat2.body.immovable=true



    plat3 = game.add.sprite(2325,540,"platform")
    plat3.width=220
    plat3.height=10
    game.physics.arcade.enable(plat3)
    plat3.body.immovable=true


    sparkle_collision = game.add.group()
    sparkle_collision.create(2142,415,'platform')
    sparkle_collision.create(1969, 324, 'platform')
    sparkle_collision.create(2050, 362, 'platform')
    sparkle_collision.create(1930, 282, 'platform')
    sparkle_collision.create(1850, 246, 'platform')
    sparkle_collision.setAll('scale.x', 0.1)
    sparkle_collision.setAll('scale.y', 0.5)
    game.physics.arcade.enable(sparkle_collision)
    sparkle_collision.setAll('body.immovable', true)


    plat4 = game.add.group()
    plat4.create(3040,725,'platform')
        plat4.setAll('scale.x', 17)
        plat4.setAll('scale.y', 1)
        game.physics.arcade.enable(plat4)
        plat4.setAll('body.immovable', true)
        
        plat5 = game.add.group()
        plat5.create(7200,685,'platform')
        plat5.create(7460,605,'platform')
        plat5.create(7530,685,'platform')
        plat5.create(7380,645,'platform')
        plat5.create(7500,645,'platform')
        plat5.create(7850,560,'platform')
        plat5.create(7950,525,'platform')
        plat5.create(8080,480,'platform')
        plat5.create(8180,480,'platform')
        plat5.create(8360,445,'platform')
        plat5.create(8700,445,'platform')
        plat5.create(8530,445,'platform')
        plat5.create(8870,445,'platform')
        plat5.create(9030,445,'platform')
        plat5.create(9230,480,'platform')
        plat5.create(9400,480,'platform')
        plat5.create(9530,480,'platform')
        plat5.create(9650,525,'platform')
        plat5.create(9750,560,'platform')
        plat5.create(9850,605,'platform')
        plat5.create(9960,645,'platform')
        plat5.create(10060,685,'platform')
        plat5.create(10110,725,'platform')
        plat5.create(8530,525,'platform')
        plat5.create(8580,490,'platform')
        plat5.create(8430,560,'platform')
        plat5.create(8160,500,'platform')
        plat5.create(8000,500,'platform')
        
    
            plat5.setAll('scale.x', 2)
            plat5.setAll('scale.y', 0.7)
            game.physics.arcade.enable(plat5)
            plat5.setAll('body.immovable', true)



            
rock = game.add.sprite(1790,720,"platform")
rock.width=10
rock.height=10
game.physics.arcade.enable(rock)
rock.body.immovable=true

}



function Final_win(){

    const style = {
        font: '50px Tahoma',
        fill: '#de0a26',
        align: 'center',
        stroke: '#536878',
        strokeThickness: 4
    }

    text1 = game.add.text(11330, 700, "You have released the goddess!!!", style)
    text1.anchor.setTo(0.5)
    text1.scale.setTo(1.1)
    game.physics.arcade.enable(text1)
    text1.fixedToCamera = true
    text1.cameraOffset.setTo(500,400)


}