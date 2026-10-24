
let cartCount = 0;
let cartTotal = 0;

const cartDisplay = document.getElementById("cart-count");
const searchInput = document.getElementById("search");
const emptyMessage = document.getElementById("empty-message");

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.price);

    cartCount++;
    cartTotal += price;

    cartDisplay.textContent = cartCount;
    cartDisplay.title =
      `Items: ${cartCount} | Total: ₹${cartTotal}`;

    button.textContent = "✓ Added";

    setTimeout(() => {
      button.textContent = "+ Add";
    }, 700);
  });
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll(".food-card").forEach(card => {
    const matches = card.dataset.name.includes(query);

    card.hidden = !matches;

    if (matches) visibleCount++;
  });

  emptyMessage.hidden = visibleCount !== 0;
});
