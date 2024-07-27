export function Header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <img src="/assets/logo.svg" alt="CALDENA Logo">
    <nav>
      <a href="#">Home</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  `;
  return header;
}