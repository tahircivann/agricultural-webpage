import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Introduction } from './components/introduction.js';
import { Footer } from './components/footer.js';
import { Contact } from './components/contact.js';

const app = document.getElementById('app');
window.cart = []; // Make the cart globally available
function renderHomePage() {
  app.innerHTML = '';
  app.appendChild(Header());
  const hero = Hero();
  hero.classList.add('flex-grow');
  app.appendChild(hero);
  const intro = Introduction();
  intro.classList.add('flex-grow');
  app.appendChild(intro);
  app.appendChild(Footer());
}

function renderProductsPage() {
  app.innerHTML = '';
  app.appendChild(Header());
  const showcase = ProductShowcase();
  showcase.classList.add('flex-grow');
  app.appendChild(showcase);
  app.appendChild(Footer());
}

function renderContactPage() {
  app.innerHTML = '';
  app.appendChild(Header());
  const contact = Contact();
  contact.classList.add('flex-grow');
  app.appendChild(contact);
  app.appendChild(Footer());
}

function renderProductDetailPage(productId) {
  app.innerHTML = '';
  app.appendChild(Header());
  const detail = ProductDetail(productId);
  detail.classList.add('flex-grow');
  app.appendChild(detail);
  app.appendChild(Footer());
}

function renderCartPage() {
  app.innerHTML = '';
  app.appendChild(Header());
  const cart = Cart();
  cart.classList.add('flex-grow');
  app.appendChild(cart);
  app.appendChild(Footer());
}

window.addEventListener('hashchange', () => {
  if (window.location.hash.startsWith('#product/')) {
    const productId = window.location.hash.split('/')[1];
    renderProductDetailPage(productId);
  } else if (window.location.hash === '#products') {
    renderProductsPage();
  } else if (window.location.hash === '#contact') {
    renderContactPage();
  } else if (window.location.hash === '#cart') {
    renderCartPage();
  } else {
    renderHomePage();
  }
});

renderHomePage();

export function ProductShowcase() {
  const showcase = document.createElement('section');
  showcase.className = 'product-grid';
  showcase.innerHTML = `
    ${createProductCards(9)}
  `;
  return showcase;
}

function createProductCards(count) {
  let cards = '';
  const prices = [19.99, 24.99, 29.99, 34.99, 39.99, 44.99, 49.99, 54.99, 59.99];
  for (let i = 1; i <= count; i++) {
    cards += `
      <div class="product-card">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-cu_500x500_240410_pp.png" alt="Product ${i}">
        <h3>Product ${i}</h3>
        <p>Brief description of Product ${i}.</p>
        <p class="price">$${prices[i - 1].toFixed(2)}</p>
        <button onclick="location.hash='#product/${i}'">Learn More</button>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  }
  return cards;
}

export function ProductDetail(productId) {
  const prices = [19.99, 24.99, 29.99, 34.99, 39.99, 44.99, 49.99, 54.99, 59.99];
  const detailPage = document.createElement('section');
  detailPage.className = 'product-details-page';
  detailPage.innerHTML = `
    <div class="product-overview">
      <div class="carousel">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-cu_500x500_240410_pp.png" alt="Product Image 3">
      </div>
      <div class="details">
        <h2>Product ${productId}</h2>
        <p>Brief introduction of Product ${productId}.</p>
        <p class="price">$${prices[productId - 1].toFixed(2)}</p>
      </div>
    </div>
    <div class="tabbed-content">
      <div class="tab-buttons">
        <button class="active" data-tab="description">Description</button>
        <button data-tab="features">Features</button>
        <button data-tab="benefits">Benefits</button>
        <button data-tab="usage">Usage Instructions</button>
        <button data-tab="safety">Safety Information</button>
      </div>
      <div class="tab-content active" id="description">
        <p>Detailed description of Product ${productId}.</p>
      </div>
      <div class="tab-content" id="features">
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div class="tab-content" id="benefits">
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>
      </div>
      <div class="tab-content" id="usage">
        <p>Instructions for using Product ${productId}.</p>
      </div>
      <div class="tab-content" id="safety">
        <p>Safety information for Product ${productId}.</p>
      </div>
    </div>
    <div class="call-to-action">
      <button onclick="location.hash='#contact'">Contact Sales</button>
      <button onclick="addToCart(${productId})">Add to Cart</button>
    </div>
  `;
  setTimeout(() => {
    addTabFunctionality();
  }, 0);
  return detailPage;
}

window.addToCart = function(productId) {
  cart.push(productId);
  updateCartCount();
  showToast(`Product ${productId} has been added to the cart.`);
}

export function Cart() {
  const cartSection = document.createElement('section');
  cartSection.className = 'cart-page';
  cartSection.innerHTML = `
    <h2>Shopping Cart</h2>
    ${createCartItems()}
    <div class="cart-actions">
      <button onclick="checkout()">Checkout</button>
    </div>
  `;
  return cartSection;
}

function createCartItems() {
  if (cart.length === 0) {
    return '<p>Your cart is empty.</p>';
  }

  let items = '<ul>';
  cart.forEach((productId, index) => {
    items += `<li>Product ${productId} <button onclick="removeFromCart(${index})">Remove</button></li>`;
  });
  items += '</ul>';
  return items;
}

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCartPage();
}

window.checkout = function() {
  alert('Proceeding to checkout...');
  // Implement the checkout process
}

function addTabFunctionality() {
  const tabs = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}