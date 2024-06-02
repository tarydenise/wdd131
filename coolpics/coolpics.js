const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  function viewHandler(event) {
    
    if (event.target.tagName.toLowerCase() === "img") {
      const clickedImage = event.target;
      const fullImageUrl = clickedImage.src; // Get image source directly from src attribute
      const altText = clickedImage.alt || ""; // Use alt text from image or empty string
  
      const modalHtml = viewerTemplate(fullImageUrl, altText);
  
      document.body.insertAdjacentHTML("afterbegin", modalHtml);
  
      const closeButton = document.querySelector(".close-viewer");
  
      closeButton.addEventListener("click", closeViewer);
    }
  }
  
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }
  
  const gallerySection = document.querySelector(".gallery");
  gallerySection.addEventListener("click", viewHandler);
  