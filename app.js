// Contact Form Submit Script

const form = document.getElementById("contact");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  console.log(username, email, feedback);
  alert("Feedback submitted successfully!");
  form.reset();
});

// Add to cart Script

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let itemCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCount++;
    cartCount.textContent = itemCount;
  });
});
