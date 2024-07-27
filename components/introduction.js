export function Introduction() {
    const intro = document.createElement('section');
    intro.className = 'introduction';
    intro.innerHTML = `
      <div class="icon">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-aktiv-48-plus_500x500_240410_pp-170x170.png" alt="Mineral Fertilizers">
        <p>Mineral Fertilizers</p>
      </div>
      <div class="icon">
        <img src="https://caldena.com/zjed-content/uploads/2021/03/caldena_packshoty_macrospeed-green-600kg_500x500_240410_pp-170x170.png" alt="Organic Fertilizers">
        <p>Organic Fertilizers</p>
      </div>
    `;
    return intro;
  }
  