export function Hero() {
    const hero = document.createElement('section');
    hero.className = 'hero';
    hero.innerHTML = `
      <h1>Our Commitment to Sustainability and Innovation</h1>
      <button>Explore Products</button>
    `;
    return hero;
  }