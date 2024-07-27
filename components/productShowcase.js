export function ProductShowcase() {
    const showcase = document.createElement('section');
    showcase.className = 'product-grid';
    showcase.innerHTML = `
      <div class="product-card">
        <img src="https://via.placeholder.com/250" alt="Product 1">
        <h3>Product 1</h3>
        <p>Brief description of Product 1.</p>
        <button>Learn More</button>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/250" alt="Product 2">
        <h3>Product 2</h3>
        <p>Brief description of Product 2.</p>
        <button>Learn More</button>
      </div>
    `;
    return showcase;
  }
  