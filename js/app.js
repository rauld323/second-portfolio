// MENU - START
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('mouseup', function (event) {
	let closeNav = document.getElementById('myNav');
	if (event.target != closeNav) {
		document.getElementById("myNav").style.width = "0%";
	}
})

// MENU- END


//Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.to(".float-intro",{
	scrollTrigger:{
		trigger: ".float-intro",
		start: "350px 70%",
		end: "+=300px",
		scrub: true,
		pin: ".intro",
		toggleActions: "restart pause reverse pause"
	},
		x:280,
		duration: 3
})

const tl = gsap.timeline({

	scrollTrigger: {
		trigger: ".intro-para",
		start: "70px 100%",
		end: "+=400px 40%",
		scrub: true,
		toggleActions: "restart pause reverse pause",
		stagger: 1
	}

});

tl
	.to('.intro-para', { opacity: 0, duration: 0.5})
	.to('.intro-para', { opacity: 1, duration: 0.5}, .5)
	;

	// ARROWS - START
gsap.to('.scroll-arrow', {
	scrollTrigger: {
		trigger: '.scroll-arrow',
		toggleActions: "restart pause reverse pause",
		scrub: true
	},
	duration: .5,
	y: 150
})

gsap.to('.other-scroll-arrow', {
	scrollTrigger: {
		trigger: '.other-scroll-arrow',
		toggleActions: "restart pause reverse pause",
		scrub: true
	},
	duration: .3,
	y: -120
})
//ARROWS - END

gsap.to('.tech-box',{
	scrollTrigger: {
		// start: "1000px 10%",
		// end: "1500px 50%",
		trigger:'tech-box',
		toggleActions: "restart pause reverse pause",
		scrub:true
	},
	duration: 1,
	y: -200
})
