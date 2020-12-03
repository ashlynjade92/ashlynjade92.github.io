var animateIn = new TweenMax();

animateIn
.fromTo(picOverlay, 2, {skewX:30, scale:1.5}, {skewX:0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut},"-=1")