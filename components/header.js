export function Header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <img src="src="https://caldena.com/zjed-content/themes/caldena/assets/images/logo.svg"" alt="Logo">
    <nav>
      <a href="#">Home</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="cart-icon" onclick="location.hash='#cart'">
      <span class="material-icons">shopping_cart</span>
      <span class="cart-count">${cart.length}</span>
    </div>
  `;
  return header;
}