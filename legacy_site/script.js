// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
	menuToggle.addEventListener("click", function () {
		const isOpen = mobileMenu.style.display === "block";
		mobileMenu.style.display = isOpen ? "none" : "block";

		// Animate hamburger
		const hamburger = menuToggle.querySelector(".hamburger");
		if (hamburger) {
			hamburger.classList.toggle("active");
		}
	});

	// Close mobile menu when clicking on links
	document.querySelectorAll(".mobile-nav-link").forEach((link) => {
		link.addEventListener("click", function () {
			mobileMenu.style.display = "none";
			const hamburger = menuToggle.querySelector(".hamburger");
			if (hamburger) {
				hamburger.classList.remove("active");
			}
		});
	});
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	});
});

// Active navigation highlighting
window.addEventListener("scroll", function () {
	const sections = document.querySelectorAll("section[id]");
	const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === "#" + current) {
			link.classList.add("active");
		}
	});
});

// Product tabs functionality
document.querySelectorAll(".tab-button").forEach((button) => {
	button.addEventListener("click", function () {
		const targetTab = this.getAttribute("data-tab");

		// Remove active class from all buttons and contents
		document
			.querySelectorAll(".tab-button")
			.forEach((btn) => btn.classList.remove("active"));
		document
			.querySelectorAll(".tab-content")
			.forEach((content) => content.classList.remove("active"));

		// Add active class to clicked button
		this.classList.add("active");

		// Show corresponding content
		if (targetTab === "all") {
			const allTab = document.getElementById("tab-all");
			if (allTab) allTab.classList.add("active");
		} else {
			const targetContent = document.getElementById("tab-" + targetTab);
			if (targetContent) targetContent.classList.add("active");
		}
	});
});

// WhatsApp button functionality
document.querySelectorAll(".whatsapp-btn").forEach((button) => {
	button.addEventListener("click", function () {
		const message =
			this.getAttribute("data-message") ||
			"Hola, me gustaría obtener más información.";
		const phoneNumber = "573123973657";
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(url, "_blank");
	});
});

// Intersection Observer for animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = "1";
			entry.target.style.transform = "translateY(0)";
		}
	});
}, observerOptions);

// Observe all fade-in elements when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".fade-in, .reveal-card").forEach((el) => {
		observer.observe(el);
	});
});

// Header scroll effect
window.addEventListener("scroll", function () {
	const header = document.querySelector(".sticky-header");
	if (header) {
		if (window.scrollY > 100) {
			header.style.background = "rgba(255, 255, 255, 0.98)";
			header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
		} else {
			header.style.background = "rgba(255, 255, 255, 0.95)";
			header.style.boxShadow = "none";
		}
	}
});

// Loading animation
window.addEventListener("load", function () {
	document.body.classList.add("loaded");
});
