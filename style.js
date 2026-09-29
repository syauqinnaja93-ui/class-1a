```javascript
// ======================================
// TOMBOL MASUK
// ======================================

function masukWebsite() {

    const modal = document.getElementById("welcomeModal");

    modal.classList.add("active");

}


// ======================================
// TUTUP MODAL
// ======================================

function tutupModal() {

    const modal = document.getElementById("welcomeModal");

    modal.classList.remove("active");

}


// ======================================
// KLIK DI LUAR MODAL
// ======================================

const modal = document.getElementById("welcomeModal");

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        tutupModal();

    }

});


// ======================================
// TEKAN ESC UNTUK MENUTUP
// ======================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        tutupModal();

    }

});


// ======================================
// ANIMASI SAAT SCROLL
// ======================================

const cards = document.querySelectorAll(".member-card");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
```
