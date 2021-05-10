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



gsap.to('.tech-box',{
	scrollTrigger: {
		start: "1000px 10%",
		end: "1500px 50%",
		trigger:'tech-box',
		toggleActions: "restart pause reverse pause",
		scrub:true
	},
	duration: .5,
	y: -100
})




		gsap.to(".float-intro", {
			scrollTrigger: {
				trigger: "#intro",
				scrub: true,
				pin: "#intro",
				toggleActions: "restart pause reverse pause"
			},
			x: 250,
			duration: 2
		})




const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".intro-para",
				start: "90px 100%",
				end: "+=400px 40%",
				scrub: true,
				toggleActions: "restart pause reverse pause",
				stagger: 2
			}
		}
		);

		tl
			.to('.intro-para', { opacity: 0, duration: 0.5 })
			.to('.intro-para', { opacity: 1, duration: 0.5 }, .5)
			;


// Contact Form Menu
function openContact() {
	document.getElementById("contactForm").style.height = "100%";
}

/* Close */
function closeContact() {
		document.getElementById("contactForm").style.width = "0%";
	}


window.addEventListener('mouseup', function (event) {
	let form = document.getElementById('ove');
	if (event.target !== form && event.target.parentNode !== form) {
		document.getElementById("contactForm").style.height = "0%";
	}
})






// gsap.to('.paralax-info ', {
// 	scrollTrigger: {
// 		trigger: '.paralax-info',
// 		toggleActions: "restart pause reverse pause",
// 		scrub: true
// 	},
// 	duration: 3,
// 	y: -150
// })
// gsap.to('.paralax-info-right ', {
// 	scrollTrigger: {
// 		trigger: '.paralax-info-right',
// 		toggleActions: "restart pause reverse pause",
// 		scrub: true
// 	},
// 	duration: 3,
// 	y: -150
// })




// 	// ARROWS - START
// gsap.to('.scroll-arrow', {
// 	scrollTrigger: {
// 		trigger: '.scroll-arrow',
// 		end: "+=200px 50%",
// 		toggleActions: "restart pause reverse pause",
// 		scrub: true
// 	},
// 	duration: .5,
// 	y: 100
// })

// gsap.to('.other-scroll-arrow', {
// 	scrollTrigger: {
// 		trigger: '.other-scroll-arrow',
// 		toggleActions: "restart pause reverse pause",
// 		scrub: true
// 	},
// 	duration: .3,
// 	y: -120
// })
// //ARROWS - END














// // Project Picture Sliding From the Sid



// let parallaxT = gsap.timeline();


// ScrollTrigger.matchMedia({
// 	"(min-width: 1200px)": function () {
// 		parallaxT.from('.parallax', {
// 			scrollTrigger: {
// 				trigger: '.paralax-container-left',
// 				toggleActions: "play play pause pause",
// 				scrub: true
// 			},
// 			duration: 2,
// 			x: -100
// 		}
// 		)

// 		parallaxT.from('.parallax2', {
// 			scrollTrigger: {
// 				trigger: '.parallax-section1',
// 				toggleActions: "play play pause pause",
// 				scrub: true
// 			},
// 			duration: 2,
// 			x: 100
// 		}
// 		)
// 		gsap.to(".float-intro", {
// 			scrollTrigger: {
// 				trigger: ".float-intro",
// 				start: "100px 70%",
// 				end: "+=200px",
// 				scrub: true,
// 				pin: "#home",
// 				toggleActions: "restart pause reverse pause"
// 			},
// 			x: 100,
// 			duration: 3
// 		})

// 		const tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: ".intro-para",
// 				start: "90px 100%",
// 				end: "+=400px 40%",
// 				scrub: true,
// 				toggleActions: "restart pause reverse pause",
// 				stagger: 2
// 			}
// 		}
// 		);

// 		tl
// 			.to('.intro-para', { opacity: 0, duration: 0.5 })
// 			.to('.intro-para', { opacity: 1, duration: 0.5 }, .5)
// 			;
// 	}

// 	"(max-width: 480px)": function(){

// 		gsap.to(".float-intro", {
// 			scrollTrigger: {
// 				trigger: ".float-intro",
// 				start: "50px 50%",
// 				end: "+=400px 40%",
// 				toggleActions: "restart pause reverse pause",
// 				pin:"#home",
// 				stagger: 1,
// 				scrub: true,
// 			},
// 			x: 70,
// 			duration: 2
// 		})

// 		const tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: ".intro-para",
// 				start: "150px 110%",
// 				end: "+=350px 40%",
// 				scrub: true,
// 				toggleActions: "restart pause reverse pause",
// 				stagger: 1
// 			}
// 		}
// 		);

// 		tl
// 			.to('.intro-para', { opacity: 0, duration: 0.5 })
// 			.to('.intro-para', { opacity: 1, duration: 0.5 }, .5)
// 			;
// 	}
// }
// )
