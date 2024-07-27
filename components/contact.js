export function Contact() {
    const contact = document.createElement('section');
    contact.innerHTML = `
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
    `;
    return contact;
  }
  