// productDetail.js
document.addEventListener("DOMContentLoaded", function() {
    const queryParams = new URLSearchParams(window.location.search);
    const productId = queryParams.get('productId');
    if (productId) {
      loadProductDetail(productId);
    }
  });
  
  function loadProductDetail(productId) {
    const productDetailSection = document.querySelector('#product-detail');
    if (productDetailSection) {
      productDetailSection.innerHTML = getProductDetailHtml(productId);
    }
  }
  
  function getProductDetailHtml(productId) {
    return `
      <section class="product-overview">
        <div class="image-carousel">
          <img src="https://via.placeholder.com/600x400" alt="Product ${productId} Image 1">
          <img src="https://via.placeholder.com/600x400" alt="Product ${productId} Image 2">
          <img src="https://via.placeholder.com/600x400" alt="Product ${productId} Image 3">
        </div>
        <div class="product-info">
          <h1>Product ${productId}</h1>
          <p class="short-description">Brief introduction to the product.</p>
        </div>
      </section>
      <section class="product-details">
        <div class="tabs">
          <button class="tab-button active" data-tab="description">Description</button>
          <button class="tab-button" data-tab="features">Features</button>
          <button class="tab-button" data-tab="benefits">Benefits</button>
          <button class="tab-button" data-tab="usage">Usage Instructions</button>
          <button class="tab-button" data-tab="safety">Safety Information</button>
        </div>
        <div class="tab-content active" id="description">
          <p>Detailed description of Product ${productId}.</p>
        </div>
        <div class="tab-content" id="features">
          <p>Key features of Product ${productId}.</p>
        </div>
        <div class="tab-content" id="benefits">
          <p>Benefits of using Product ${productId}.</p>
        </div>
        <div class="tab-content" id="usage">
          <p>Instructions on how to use Product ${productId}.</p>
        </div>
        <div class="tab-content" id="safety">
          <p>Safety information about Product ${productId}.</p>
        </div>
      </section>
      <section class="call-to-action">
        <button class="cta-button">Contact Sales</button>
        <button class="cta-button">Add to Cart</button>
      </section>
    `;
  }
  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab-button')) {
      const tabButtons = document.querySelectorAll('.tab-button');
      tabButtons.forEach(button => button.classList.remove('active'));
      event.target.classList.add('active');
  
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => content.classList.remove('active'));
      const activeTab = document.querySelector(`#${event.target.getAttribute('data-tab')}`);
      if (activeTab) {
        activeTab.classList.add('active');
      }
    }
  });
  