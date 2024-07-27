import { Header } from './components/header.js';
import { Hero } from './components/hero.js';
import { Introduction } from './components/introduction.js';
import { Footer } from './components/footer.js';
import { ProductShowcase } from './components/productShowcase.js';
import { Contact } from './components/contact.js';

const app = document.getElementById('app');

function renderHomePage() {
  app.innerHTML = '';
  app.appendChild(Header());
  app.appendChild(Hero());
  app.appendChild(Introduction());
  app.appendChild(Footer());
}

function renderProductsPage() {
  app.innerHTML = '';
  app.appendChild(Header());
  app.appendChild(ProductShowcase());
  app.appendChild(Footer());
}

function renderContactPage() {
  app.innerHTML = '';
  app.appendChild(Header());
  app.appendChild(Contact());
  app.appendChild(Footer());
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#products') {
    renderProductsPage();
  } else if (window.location.hash === '#contact') {
    renderContactPage();
  } else {
    renderHomePage();
  }
});

renderHomePage();
