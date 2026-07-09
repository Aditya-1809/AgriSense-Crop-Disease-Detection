document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Progress Bar Animation
    // ===============================

    const progressBar = document.querySelector(".progress-bar");

    if (progressBar) {

        const finalWidth = progressBar.dataset.width;

        progressBar.style.width = "0%";

        setTimeout(() => {

            progressBar.style.width = finalWidth;

        }, 300);

    }

    // ===============================
    // Fade Animation
    // ===============================

    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {

        section.style.opacity = "0";

        section.style.transform = "translateY(25px)";

        setTimeout(() => {

            section.style.transition = "0.6s";

            section.style.opacity = "1";

            section.style.transform = "translateY(0px)";

        }, index * 150);

    });

    // ===============================
    // Button Hover Animation
    // ===============================

    const button = document.querySelector("button");

    if (button) {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "scale(1.03)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "scale(1)";

        });

    }

    // ===============================
    // Image Preview
    // ===============================

    const fileInput = document.getElementById("fileInput");

    const previewImage = document.getElementById("previewImage");

    if (fileInput && previewImage) {

        fileInput.addEventListener("change", function () {

            const file = this.files[0];

            if (file) {

                const reader = new FileReader();

                reader.onload = function (event) {

                    previewImage.src = event.target.result;

                    previewImage.style.display = "block";

                };

                reader.readAsDataURL(file);

            }

        });

    }

});