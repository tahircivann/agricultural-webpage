
export function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';
    hero.innerHTML = `
      <div class="hero-content">
        <button onclick="location.hash='#products'">Explore Products</button>
      </div>
    `;
    return hero;
}