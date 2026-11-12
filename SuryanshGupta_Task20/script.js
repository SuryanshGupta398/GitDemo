let cart = []

const cartItems = document.getElementById("cart-items");
const emptycart = document.getElementById("empty-cart");
const totalItems = document.getElementById("total");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const bookBtn = document.getElementById("book-btn");
const bookInfo = document.getElementById("book-info");
const bookServiceBtn = document.getElementById("book-service");
const services = document.querySelectorAll(".service");

bookServiceBtn.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});

services.forEach((service, index) => {
    const button = service.querySelector(".add-item");
    button.addEventListener("click", function () {
        const nameElement = service.querySelector("div").innerText.split("·")[0].trim();
        const priceElement = Number(service.querySelector(".price").innerText.replace(/[₹,]/g, ""));

        if (button.innerText.includes("Add")) {
            cart.push({ nameElement, priceElement, index });
            button.innerText = "Remove Item ⊖";
            button.classList.add("remove");
        }
        else {
            cart = cart.filter(item => item.index !== index);
            button.innerText = "Add Item ⊕";
            button.classList.remove("remove");
        }
        updateCart();
    });
});

function updateCart() {
    if (cart.length > 0) {
        bookBtn.classList.add("active");
    } else {
        bookBtn.classList.remove("active");
    }
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.priceElement;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="service">${item.nameElement}</td>
            <td>₹${item.priceElement}.00</td>
        `;
        cartItems.appendChild(row);
    });
    emptycart.style.display = cart.length === 0 ? "flex" : "none";
    totalItems.textContent = `₹ ${total.toFixed(2)}`;
}

bookBtn.addEventListener("click", async function () {
    if (cart.length === 0) {
        bookInfo.textContent = "ⓘ Add the items to the cart to book";
        bookInfo.style.display = "block";
    }
    else if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || phoneInput.value.trim() === "") {
        bookInfo.textContent = "ⓘ Please fill form details."
        bookInfo.style.display = "block";
    }
    else if (!emailInput.checkValidity()) {
        bookInfo.textContent = "ⓘ Please enter a valid email address."
        bookInfo.style.display = "block";
    }
    else if (!phoneInput.checkValidity()) {
        bookInfo.textContent = "ⓘ Please enter a valid phone number."
        bookInfo.style.display = "block";
    }
    else {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const total = cart.reduce((sum, item) => {
            return sum + item.priceElement;
        }, 0);
        bookBtn.disabled = true;
        bookBtn.innerText = "Sending...";
        bookInfo.textContent = "Please wait, sending confirmation email";
        bookInfo.style.display = "block";
        bookInfo.style.color = "blue";
        try {
            await sendConfirmationEmail(name, email, phone, cart, total);
            bookInfo.textContent = "ⓘ Email has been sent successfully"
            bookInfo.style.display = "block";
            bookInfo.style.color = "green";
            resetBooking();
        }
        catch (error) {
            console.log("Email sending failed:", error);
            bookInfo.textContent = "ⓘ Email could not be sent. Please try again.";
            bookInfo.style.color = "red";
        }
        finally {
            bookBtn.disabled = false;
            bookBtn.innertext = "Book Now";
        }

    }
});

function resetBooking() {
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cart = [];
    updateCart();
    document.querySelectorAll(".add-item").forEach(button => {
        button.innerHTML = "Add Item ⊕";
        button.classList.remove("remove");
    });
}