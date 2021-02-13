var tl = gsap.timeline({defaults: {duration: .6, ease:Back.easeOut.config(1)}})

tl.fromTo('.Music', { x:-800 }, {

    x:0,
    duration:1.5,
    
    
   

},0)

.fromTo('.is-the-way', {x:1000},{

    x:0,
    duration:1.5,
    

},0)

.fromTo('.jumping-guy', {opacity:0},{

    opacity: 1,
    duration: 2
})

.fromTo('.ellipse-1', {scale: 0.5},{

    scale: 1,
    duration: 3
},0)


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.secondpage',
        toggleActions: "restart pause reverse reverse"

    }
});

tl2.fromTo('.Music', {opacity:1},{

    opacity:0,
    duration: 3
    
    
},0)

   .fromTo('.is-the-way',{opacity:1}, {

   opacity:0,
   duration: 3
    

},0)

   .fromTo('.jumping-guy', {opacity:1},{

    opacity:0,
    duration:3

},0)

.fromTo('.ellipse-1', {scale:1, x:0, y:0},{

    scale:0.5,
    x: -170,
    y: 800,
    duration:3,
    pin:true
},0)

.from('.beats',{

    opacity:0,

   
    
    duration:1,
    pin:true
})

.fromTo('.box', { y:100, opacity:0},{
    opacity:1,
    y:0
})
.fromTo('.box2', { y:100, opacity:0},{
    opacity:1,
    y:0
})
.fromTo('.box3', { y:100, opacity:0},{
    opacity:1,
    y:0
})










