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

function showProductDetail(productId) {
  const productDetailSection = document.querySelector('#product-detail');
  if (productDetailSection) {
    productDetailSection.innerHTML = getProductDetailHtml(productId);
    productDetailSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function getProductDetailHtml(productId) {
  return `
    <div class="product-detail">
      <img src="https://via.placeholder.com/500" alt="Product ${productId}">
      <h2>Product ${productId}</h2>
      <p>Detailed description of Product ${productId}.</p>
      <h3>Features</h3>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <h3>Benefits</h3>
      <ul>
        <li>Benefit 1</li>
        <li>Benefit 2</li>
        <li>Benefit 3</li>
      </ul>
      <h3>Usage Instructions</h3>
      <p>Instructions for using Product ${productId}.</p>
      <h3>Safety Information</h3>
      <p>Safety information for Product ${productId}.</p>
      <button onclick="hideProductDetail()">Close</button>
    </div>
  `;
}

function hideProductDetail() {
  const productDetailSection = document.querySelector('#product-detail');
  if (productDetailSection) {
    productDetailSection.innerHTML = '';
  }
}