// MENU - START
function openNav() {
	document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
	document.getElementById('myNav').style.width = '0%';
}

window.addEventListener('mouseup', function(event) {
	let closeNav = document.getElementById('myNav');
	if (event.target != closeNav) {
		document.getElementById('myNav').style.width = '0%';
	}
});

// MENU- END

//Scroll Animations
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	'(min-width: 827px)': function() {
		// Tech Box does not Move
		gsap.to('.tech-box', {
			scrollTrigger: {
				start: '1000px 10%',
				end: '1500px 50%',
				trigger: 'tech-box',
				toggleActions:
					'restart pause reverse pause',
				scrub: true
			},
			duration: 0.5,
			y: -100
		});
	},

	'(min-width: 688px)': function() {
		// intro does not move at 688px
		gsap.to('.float-intro', {
			scrollTrigger: {
				trigger: '#intro',
				scrub: true,
				pin: '#intro',
				toggleActions:
					'restart pause reverse pause'
			},
			x: 250,
			duration: 2
		});
	}
});

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.intro-para',
		start: '90px 100%',
		end: '+=400px 40%',
		scrub: true,
		toggleActions: 'restart pause reverse pause',
		stagger: 2
	}
});

tl.to('.intro-para', { opacity: 0, duration: 0.5 }).to(
	'.intro-para',
	{ opacity: 1, duration: 0.5 },
	0.5
);

// Contact Form Menu
function openContact() {
	document.getElementById('contactForm').style.height = '100%';
}

/* Close */
function closeContact() {
	document.getElementById('contactForm').style.width = '0%';
}

window.addEventListener('mouseup', function(event) {
	let form = document.getElementById('ove');
	if (
		event.target !== form &&
		event.target.parentNode !== form &&
		event.target.value == null &&
		event.target.value == ''
	) {
		document.getElementById('contactForm').style.height = '0%';
	}
});
