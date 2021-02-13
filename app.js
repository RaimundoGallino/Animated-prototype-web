anime({
    targets: '.Music',
    translateX: [-500,0],
    
    delay: anime.stagger(100, {from: 'last'}),
    easing: 'spring(1.5, 40, 18, 0)'

});


anime({
  targets: '.is-the-way',
  translateX: [600,0],
  
  easing: 'spring(1.5, 40, 18, 0)',
  delay: anime.stagger(100, {from: 'last'})
});

anime({
    targets:'.jumping-guy img',
    endDelay: 5000,
    easing: 'linear',
    duration: 1600,
    opacity:[0,1],
    delay: 600
    
});

 
anime({
      targets:'.ellipse-1',
      scale: [0.5,1],
      easing: 'spring(1, 80, 10, 0)'
      
  
});

// var animation = anime({
//     targets:'.ellipse-1',
    
//     translateY: [300,100],
//     translateX: [-90,-40],
//     scale: [1,0.5],
    
//     opacity:1,

//     easing:'spring(1, 80, 10, 0)',
//     autoplay: false

//   });

//   window.onscroll = function(e){
//     animation.seek(window.pageYOffset * 0.5);

// };





var animation2 = anime({
    targets:['.jumping-guy img','.is-the-way','.Music'],
    
    translateY: [0,-7000],
    translateX:[0,0],

    duration: 0,

    opacity:[1,0],

    easing: 'spring(1, 80, 10, 0)',
    autoplay: false

  });

  window.onscroll = function(e){
    animation2.seek(window.pageYOffset * 0.5);

};

// Animation for ellipse

document.addEventListener('DOMContentLoaded', () => {

    let waypoint = new Waypoint({
        element: document.querySelector('.ellipse-1'),
        handler: function() {

            anime({
                targets:'.ellipse-1',
                
                translateY: [300,100],
                translateX: [-90,-40],
                scale: [1,0.5],
                easing:'linear',
                
            
            })

        },
        context: document.querySelector('.firstpage'),
        offset: '100%',
    })
})

 
