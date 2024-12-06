'use strict'

const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

let x = 0
let text
function preload() {

}

function create() {

    const myStyle = {

        font: '50px Tahoma',
        fill: '#0eedbd',
        backgroundColor: '#47b7d6',
        align: 'center',
        stroke: '#DC143C',
        strokeThickness: 4
    }

    text = game.add.text(game.width/2,game.height/2, x , myStyle)
    text.anchor.setTo(0.5)
    text.scale.setTo(3)
}

function update() {
    x++
    text.setText(x)
  
}

