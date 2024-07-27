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
  for (let i = 1; i <= count; i++) {
    cards += `
      <div class="product-card">
        <img src="https://via.placeholder.com/250" alt="Product ${i}">
        <h3>Product ${i}</h3>
        <p>Brief description of Product ${i}.</p>
        <button onclick="loadProductDetail(${i})">Learn More</button>
      </div>
    `;
  }
  return cards;
}
