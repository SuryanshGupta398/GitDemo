const services = [
    {
        name: "Dry cleaning",
        price: 200,
        image: "https://media.istockphoto.com/id/1145684051/id/vektor/karakter-wanita-di-binatu-umum-meletakkan-pakaian-bersih-hingga-keranjang-memuat-pakaian.jpg?s=612x612&w=0&k=20&c=jmZ6w7RfzzyLZocdmjL2yv9ZGYP5dsDpUpsl-taxtb8="
    },
    {
        name: "Leather & Suede Cleaning",
        price: 999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1S0NGvl5A4oXfeyxVOMYWr_Fae9U1TWJ0UOWgqw8hWPyi1dtDWHiaqBja&s=10"
    },
    {
        name: "Ironing",
        price: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSchRrfI4AUU2yrLOckospnStXUQEr4eQYCmeufKi7G-s8EVr-7JpRimV&s=10"
    },
    {
        name: "Wedding Dress Cleaning",
        price: 2400,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkbAZAAvvbaXJUyAe8gQzmAtwKpwhlMMvaePKBUMi76eFIbknigWDFjuZ&s=10"
    },
    {
        name: "Wash And Fold",
        price: 140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AzLqKI5cIwTOPRth4gC3cdIFwKneOllKTRkJYX2-zw0zIpn1jLziBSQ&s=10"
    },
    {
        name: "Stain Removal",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFoO84o08ZYd36kNrecYRLynK2tso7kdNLAQxS2zdOv1taaYH"
    }
]

let currentItem = 0;

let cart = []

const serviceImage = document.getElementById("service-image");
const serviceName = document.getElementById("service-name");
const servicePrice = document.getElementById("service-price");

const cartItems = document.getElementById("cart-items");
const emptycart = document.getElementById("empty-cart");
const totalItems = document.getElementById("total");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const bookBtn = document.getElementById("book-btn");
const bookInfo = document.getElementById("book-info");

function showService() {
    if (currentItem >= services.length) {
        document.getElementById("end-message").style.display = "block";
        document.getElementById("service-button").style.display = "none";
        document.getElementById("note").style.visibility = "hidden";
        serviceImage.style.display = "none";
        serviceName.style.display = "none";
        servicePrice.style.display = "none";
        return;
    }

    document.getElementById("end-message").style.display = "none";
    document.getElementById("service-button").style.display = "flex";
    document.getElementById("note").style.visibility = "visible";

    serviceImage.style.display = "block";
    serviceName.style.display = "block";
    servicePrice.style.display = "block";

    const service = services[currentItem];

    serviceImage.src = service.image;
    serviceName.textContent = service.name;
    servicePrice.textContent = `₹${service.price}.00`;
}

document.getElementById("restart-btn").addEventListener("click", function () {
    currentItem = 0;
    showService();
})

bookBtn.addEventListener("click", function () {
    if (cart.length === 0) {
        bookInfo.textContent = "ⓘ Add the items to the cart to book";
        bookInfo.style.display = "block";
    }
    else if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || phoneInput.value.trim() === "") {
        bookInfo.textContent = "ⓘ Please fill form details."
        bookInfo.style.display = "block";
    }
    else {
        bookInfo.textContent = "ⓘ Thank you for contacting, we will get back to you soon"
        bookInfo.style.display = "block";
        bookInfo.style.color = "green";
    }
});

function addItem() {
    const service = services[currentItem];
    cart.push(service);
    bookBtn.classList.add("active");
    updateCart();
    bookInfo.style.display = "none";
    currentItem++;
    showService();
}

function skipItem() {
    currentItem++;
    showService();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="service">${item.name}</td>
            <td>₹${item.price}.00</td>
        `;
        cartItems.appendChild(row);
    });
    emptycart.style.display = cart.length === 0 ? "flex" : "none";
    totalItems.textContent = `₹ ${total}`;
}

document.getElementById("add-btn").addEventListener("click", addItem);
document.getElementById("skip-btn").addEventListener("click", skipItem);

showService();