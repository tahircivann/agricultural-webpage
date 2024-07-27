(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=c(a);fetch(a.href,i)}})();function r(){const t=document.createElement("header");return t.innerHTML=`
    <img src="src="https://caldena.com/zjed-content/themes/caldena/assets/images/logo.svg"" alt="Logo">
    <nav>
      <a href="#">Home</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="cart-icon" onclick="location.hash='#cart'">
      <span class="material-icons">shopping_cart</span>
      <span class="cart-count">${cart.length}</span>
    </div>
  `,t}function h(){const t=document.createElement("section");return t.className="hero",t.innerHTML=`
      <div class="hero-image">
      <button onclick="location.hash='#products'">Explore Products</button>
    `,t}function m(){const t=document.createElement("section");return t.className="introduction",t.innerHTML=`
      <div class="icon">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-aktiv-48-plus_500x500_240410_pp-170x170.png" alt="Mineral Fertilizers">
        <p>Mineral Fertilizers</p>
      </div>
      <div class="icon">
        <img src="https://caldena.com/zjed-content/uploads/2021/03/caldena_packshoty_macrospeed-green-600kg_500x500_240410_pp-170x170.png" alt="Organic Fertilizers">
        <p>Organic Fertilizers</p>
      </div>
    `,t}function s(){const t=document.createElement("footer");return t.innerHTML=`
      <p>Contact us at: info@caldena.com | +1 234 567 890</p>
      <p>&copy; 2024 CALDENA. All rights reserved.</p>
    `,t}function f(){const t=document.createElement("section");return t.innerHTML=`
      <div class="contact-form">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="text" placeholder="Subject">
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </div>
      <div class="map">
        <iframe src="https://maps.google.com/maps?q=caldena&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    `,t}const e=document.getElementById("app");window.cart=[];function l(){e.innerHTML="",e.appendChild(r()),e.appendChild(h()),e.appendChild(m()),e.appendChild(s())}function v(){e.innerHTML="",e.appendChild(r()),e.appendChild(C()),e.appendChild(s())}function b(){e.innerHTML="",e.appendChild(r()),e.appendChild(f()),e.appendChild(s())}function g(t){e.innerHTML="",e.appendChild(r()),e.appendChild(w(t)),e.appendChild(s())}function u(){e.innerHTML="",e.appendChild(r()),e.appendChild(L()),e.appendChild(s())}window.addEventListener("hashchange",()=>{if(window.location.hash.startsWith("#product/")){const t=window.location.hash.split("/")[1];g(t)}else window.location.hash==="#products"?v():window.location.hash==="#contact"?b():window.location.hash==="#cart"?u():l()});l();function C(){const t=document.createElement("section");return t.className="product-grid",t.innerHTML=`
    ${y(9)}
  `,t}function y(t){let n="";const c=[19.99,24.99,29.99,34.99,39.99,44.99,49.99,54.99,59.99];for(let o=1;o<=t;o++)n+=`
      <div class="product-card">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-cu_500x500_240410_pp.png" alt="Product ${o}">
        <h3>Product ${o}</h3>
        <p>Brief description of Product ${o}.</p>
        <p class="price">$${c[o-1].toFixed(2)}</p>
        <button onclick="location.hash='#product/${o}'">Learn More</button>
        <button onclick="addToCart(${o})">Add to Cart</button>
      </div>
    `;return n}function w(t){const n=[19.99,24.99,29.99,34.99,39.99,44.99,49.99,54.99,59.99],c=document.createElement("section");return c.className="product-details-page",c.innerHTML=`
    <div class="product-overview">
      <div class="carousel">
        <img src="https://caldena.com/zjed-content/uploads/2020/09/caldena_packshoty_agravita-cu_500x500_240410_pp.png" alt="Product Image 3">
      </div>
      <div class="details">
        <h2>Product ${t}</h2>
        <p>Brief introduction of Product ${t}.</p>
        <p class="price">$${n[t-1].toFixed(2)}</p>
      </div>
    </div>
    <div class="tabbed-content">
      <div class="tab-buttons">
        <button class="active" data-tab="description">Description</button>
        <button data-tab="features">Features</button>
        <button data-tab="benefits">Benefits</button>
        <button data-tab="usage">Usage Instructions</button>
        <button data-tab="safety">Safety Information</button>
      </div>
      <div class="tab-content active" id="description">
        <p>Detailed description of Product ${t}.</p>
      </div>
      <div class="tab-content" id="features">
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div class="tab-content" id="benefits">
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
          <li>Benefit 3</li>
        </ul>
      </div>
      <div class="tab-content" id="usage">
        <p>Instructions for using Product ${t}.</p>
      </div>
      <div class="tab-content" id="safety">
        <p>Safety information for Product ${t}.</p>
      </div>
    </div>
    <div class="call-to-action">
      <button onclick="location.hash='#contact'">Contact Sales</button>
      <button onclick="addToCart(${t})">Add to Cart</button>
    </div>
  `,setTimeout(()=>{T()},0),c}window.addToCart=function(t){cart.push(t),p(),E(`Product ${t} has been added to the cart.`)};function L(){const t=document.createElement("section");return t.className="cart-page",t.innerHTML=`
    <h2>Shopping Cart</h2>
    ${P()}
    <div class="cart-actions">
      <button onclick="checkout()">Checkout</button>
    </div>
  `,t}function P(){if(cart.length===0)return"<p>Your cart is empty.</p>";let t="<ul>";return cart.forEach((n,c)=>{t+=`<li>Product ${n} <button onclick="removeFromCart(${c})">Remove</button></li>`}),t+="</ul>",t}window.removeFromCart=function(t){cart.splice(t,1),p(),u()};window.checkout=function(){alert("Proceeding to checkout...")};function T(){const t=document.querySelectorAll(".tab-buttons button"),n=document.querySelectorAll(".tab-content");t.forEach(c=>{c.addEventListener("click",()=>{t.forEach(o=>o.classList.remove("active")),n.forEach(o=>o.classList.remove("active")),c.classList.add("active"),document.getElementById(c.getAttribute("data-tab")).classList.add("active")})})}function p(){const t=document.querySelector(".cart-count");t&&(t.textContent=cart.length)}function E(t){const n=document.createElement("div");n.className="toast",n.textContent=t,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},100),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}
