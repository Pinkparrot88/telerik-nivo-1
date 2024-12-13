'use strict'

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })



function preload() {
    
}

function create() {

    const myStyle = {  //you create a constant so you can use this format of text for more than 1 place

        font: '50px Tahoma',
        fill: '#0eedbd',
        backgroundColor: '#47b7d6',
        align: 'center',
        stroke: '#DC143C',
        strokeThickness: 4
    }
    const text = game.add.text(game.width/2,game.height/2,"Slay", myStyle)
    text.anchor.setTo(0.5)
    text.scale.setTo(3)

    const text2 = game.add.text(0,0,"Bukv 2.0", myStyle)

    const text3 = game.add.text(game.width,game.height,"Bukv 3.0", myStyle)
    text3.anchor.setTo(1)
    
}

function update() {
    
    
}
