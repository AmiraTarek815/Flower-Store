document.addEventListener("DOMContentLoaded", () => {
  const images = ["firstPage.jpg", "pinkFlowres.jpg", "purpleFlowers.jpg", "purpleFlowers2.jpg", "purpleFlowers3.jpg"];
  let index = 0;
  const imgElement = document.getElementById("home-img");

  if (imgElement) {
    setInterval(() => {
      index = (index + 1) % images.length;
      imgElement.style.opacity = 0;
      setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
      }, 700);
    }, 3000);
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields before submitting");
      }
    });
  }

  const buyButtons = document.querySelectorAll(".buy-btn");
  const popup = document.getElementById("popup");
  const popupName = document.getElementById("popupName");
  const popupPrice = document.getElementById("popupPrice");
  const closePopup = document.getElementById("closePopup");
  const cnf_btn =  document.getElementById("confirm-btn");

  if (popup && popupName && popupPrice && closePopup && cnf_btn)  {
    buyButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".bouquet-card, .gift-card");
        const name = card.querySelector("h3").innerText;
        const price = card.querySelector(".price").innerText;

        popupName.innerText = name;
        popupPrice.innerText = price;
        popup.style.display = "flex";
      });
    });

    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });

   cnf_btn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  }

});
