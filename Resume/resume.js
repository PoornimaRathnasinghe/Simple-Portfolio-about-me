 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", function () {
    // Get all skill containers
    const skillContainers = document.querySelectorAll(".writing_scale, .photoshop_scale, .photography_scale, .english_scale, .sinhala_scale");

    // Animate each skill container
    skillContainers.forEach((container) => {
      const targetWidth = parseFloat(container.style.width); // Get the target width (e.g., 95%)
      let currentWidth = 0; // Start with 0% width

      function animate() {
        currentWidth += 1; // Increment by 1% (adjust as needed)
        container.style.width = currentWidth + "%";

        if (currentWidth < targetWidth) {
          // Continue animation until target width is reached
          requestAnimationFrame(animate);
        }
      }

      // Start the animation
      animate();
    });
  });