var counter = document.getElementById("counter");
counter.innerHTML = "0";
var count = 0;
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
plus.addEventListener("click", function () {
	count++;
	counter.innerHTML = count;
});
minus.addEventListener("click", function () {
	if (count > 0) {
		count--;
		counter.innerHTML = count;
	}
});
var cart = document.getElementById("cart");
var addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", function () {
	if (count > 0) {
		cart.innerHTML = count;
		// cartItemPrice.innerHTML = price.innerHTML + " x " + count + "  " + price.innerHTML * count;
		quantity.innerHTML = count;
		total.innerHTML = "$" + count * 125.0 + ".00";
	}
});

var collections = document.getElementById("collections");
var men = document.getElementById("men");
var women = document.getElementById("women");
var about = document.getElementById("about");
var contact = document.getElementById("contact");

collections.addEventListener("click", function () {
	if (collections.classList.contains("border-b-[3px]", "border-orange-500")) {
		collections.classList.remove("border-b-[3px]", "border-orange-500");
	} else {
		collections.classList.add("border-b-[3px]", "border-orange-500");
	}
});
men.addEventListener("click", function () {
	if (men.classList.contains("border-b-[3px]", "border-orange-500")) {
		men.classList.remove("border-b-[3px]", "border-orange-500");
	} else {
		men.classList.add("border-b-[3px]", "border-orange-500");
	}
});
women.addEventListener("click", function () {
	if (women.classList.contains("border-b-[3px]", "border-orange-500")) {
		women.classList.remove("border-b-[3px]", "border-orange-500");
	} else {
		women.classList.add("border-b-[3px]", "border-orange-500");
	}
});
about.addEventListener("click", function () {
	if (about.classList.contains("border-b-[3px]", "border-orange-500")) {
		about.classList.remove("border-b-[3px]", "border-orange-500");
	} else {
		about.classList.add("border-b-[3px]", "border-orange-500");
	}
});
contact.addEventListener("click", function () {
	if (contact.classList.contains("border-b-[3px]", "border-orange-500")) {
		contact.classList.remove("border-b-[3px]", "border-orange-500");
	} else {
		contact.classList.add("border-b-[3px]", "border-orange-500");
	}
});

const cartImage = document.getElementById("cartImage");
const trash = document.getElementById("trash");
const emptyCart = document.getElementById("emptyCart");
const checkout = document.getElementById("checkout");
trash.addEventListener("click", function () {
	cartImage.classList.add("hidden");
	trash.classList.add("hidden");
	emptyCart.classList.remove("hidden");
	checkout.classList.add("hidden");
	count == null;
	cart.classList.add("hidden");
});
const cartIcon = document.getElementById("cartIcon");
const openCart = document.getElementById("openCart");
cartIcon.addEventListener("click", function () {
	if (openCart.classList.contains("hidden") && count > 0) {
		openCart.classList.remove("hidden");
	} else {
		openCart.classList.add("hidden");
	}
});
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
// const price = document.getElementById("price");
// const cartItemPrice = document.getElementById("cartItemPrice");
const nextImg = document.getElementById("nextImg");
const prevImg = document.getElementById("prevImg");
const overlayImg = document.getElementById("overlayImg");
const images = {
	1: "./images/image-product-1.jpg",
	2: "./images/image-product-2.jpg",
	3: "./images/image-product-3.jpg",
	4: "./images/image-product-4.jpg",
};
console.log(images[1]);
console.log(overlayImg.getAttribute("src"));

nextImg.addEventListener("click", function () {
	if (overlayImg.getAttribute("src") == images[1]) {
		overlayImg.src = images[2];
	} else if (overlayImg.getAttribute("src") == images[2]) {
		overlayImg.src = images[3];
	} else if (overlayImg.getAttribute("src") == images[3]) {
		overlayImg.src = images[4];
	} else if (overlayImg.getAttribute("src") == images[4]) {
		overlayImg.src = images[1];
	}
});
prevImg.addEventListener("click", function () {
	if (overlayImg.getAttribute("src") == images[1]) {
		overlayImg.src = images[4];
	} else if (overlayImg.getAttribute("src") == images[2]) {
		overlayImg.src = images[1];
	} else if (overlayImg.getAttribute("src") == images[3]) {
		overlayImg.src = images[2];
	} else if (overlayImg.getAttribute("src") == images[4]) {
		overlayImg.src = images[3];
	}
});

const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const thumb4 = document.getElementById("thumb4");

const thumb5 = document.getElementById("thumb1-1");
const thumb6 = document.getElementById("thumb2-1");
const thumb7 = document.getElementById("thumb3-1");
const thumb8 = document.getElementById("thumb4-1");

thumb1.addEventListener("click", function () {
	overlayImg.src = images[1];
});
thumb2.addEventListener("click", function () {
	overlayImg.src = images[2];
});
thumb3.addEventListener("click", function () {
	overlayImg.src = images[3];
});
thumb4.addEventListener("click", function () {
	overlayImg.src = images[4];
});

thumb5.addEventListener("click", function () {
	gallery.classList.remove("hidden");
});
thumb6.addEventListener("click", function () {
	gallery.classList.remove("hidden");
});
thumb7.addEventListener("click", function () {
	gallery.classList.remove("hidden");
});
thumb8.addEventListener("click", function () {
	gallery.classList.remove("hidden");
});

const close = document.getElementById("close");
const gallery = document.getElementById("gallery");
close.addEventListener("click", function () {
	gallery.classList.add("hidden");
});

const path = document.getElementById("path");
path.addEventListener("mouseover", function () {
	path.stroke = "#FF7E1B";
});
