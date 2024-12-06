'use strict'
const game = new Phaser.Game(900, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })

function preload() {

   game.load.image("sky", "sky.png")
   
  
}

function create() {
   const h = game.add.sprite(0,0, "sky")
   h.scale.setTo(0.3)
   h.height=game.height/3
   h.width=game.width/3
   
   
  
   const p = game.add.sprite(game.width,0, "sky")
   p.scale.setTo(0.3)
   p.anchor.setTo(1,0)
   p.height=game.height/3
   p.width=game.width/3

   const s = game.add.sprite(0,game.height, "sky")
   s.scale.setTo(0.3)
   s.anchor.setTo(0,1)
   s.height=game.height/3
   s.width=game.width/3

   const f = game.add.sprite(game.width,game.height, "sky")
   f.scale.setTo(0.3)
   f.anchor.setTo(1,2)
   f.height=game.height/3
   f.width=game.width/3

   const ab = game.add.sprite(game.width,game.height, "sky")
   ab.scale.setTo(0.3)
   ab.anchor.setTo(2,1)
   ab.height=game.height/3
   ab.width=game.width/3

   const bc = game.add.sprite(game.width,game.height, "sky")
   bc.scale.setTo(0.3)
   bc.anchor.setTo(2)
   bc.height=game.height/3
   bc.width=game.width/3

   const cd = game.add.sprite(game.width,game.height, "sky")
   cd.scale.setTo(0.3)
   cd.anchor.setTo(2,3)
   cd.height=game.height/3
   cd.width=game.width/3

   const ef = game.add.sprite(game.width,game.height, "sky")
   ef.scale.setTo(0.3)
   ef.anchor.setTo(3,2)
   ef.height=game.height/3
   ef.width=game.width/3


   const fg = game.add.sprite(game.width,game.height, "sky")
   fg.scale.setTo(0.3)
   fg.anchor.setTo(1)
   fg.height=game.height/3
   fg.width=game.width/3
   

}

function update() { }