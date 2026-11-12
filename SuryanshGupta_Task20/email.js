(function () {
    emailjs.init({
        publicKey: "hHjMQGklEaovIrCX7"
    });
})();

function sendConfirmationEmail(name, email, phone, cart, totalAmount) {
    const serviceList = cart.map((item, index) => {
        return `${index + 1}. ${item.nameElement} - ₹${item.priceElement}.00`;
    }).join("\n");

    const templateParams = {
        name: name,
        to_email: email,
        phone: phone,
        service_list: serviceList,
        total_amount: `₹${totalAmount.toFixed(2)}`
    };

    return emailjs.send(
        "service_gw583b8",
        "template_xz8jk0q",
        templateParams
    );
}