'use strict'
const game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {
game.load.image("fish", "fish (0).png" )
}

let fishey
let counter = 0

function create() {
   fishey = game.add.sprite (game.width/2, game.height/2, "fish")
   fishey.scale.setTo(0.7)
   fishey.anchor.setTo(0.5)


fishey.inputEnabled = true
fishey.input.pixelPerfectOver = true
fishey.input.pixelPerfectClick = true


fishey.events.onInputDown.add(function(){
    counter += 1
    if (counter === 1){
        console.log("Your click count is at " + counter + " click")
        alert("Your click count is at " + counter + " click")
    }
    else {console.log("Your click count is at " + counter + " clicks")
          alert("Your click count is at " + counter + " clicks")
    }
})

}

function update() {

if (fishey.input.pointerOver()) {fishey.alpha = 0.5, fishey.scale.setTo(0.8)}
else {fishey.alpha = 1, fishey.scale.setTo(0.7)}
}