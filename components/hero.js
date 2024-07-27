export function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';
    hero.innerHTML = `
      <div class="hero-image">
      <button onclick="location.hash='#products'">Explore Products</button>
    `;
    return hero;
  }