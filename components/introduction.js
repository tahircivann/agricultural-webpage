export function Introduction() {
    const intro = document.createElement('section');
    intro.className = 'introduction';
    intro.innerHTML = `
      <div class="icon">
        <img src="https://via.placeholder.com/100" alt="Mineral Fertilizers">
        <p>Mineral Fertilizers</p>
      </div>
      <div class="icon">
        <img src="https://via.placeholder.com/100" alt="Organic Fertilizers">
        <p>Organic Fertilizers</p>
      </div>
    `;
    return intro;
  }
  