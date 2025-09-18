/* ===========================
   PART 2: Functions & Scope
=========================== */

// Function with parameters & return value
function calculateArea(width, height) {
    return width * height; // returns a useful value
  }
  
  // Local vs global scope demo
  let globalMessage = "I am global";
  
  function scopeDemo() {
    let localMessage = "I am local";
    console.log(globalMessage); // accessible
    console.log(localMessage);  // accessible only inside
  }
  
  scopeDemo();
  // console.log(localMessage); // ❌ Error if uncommented
  
  
  /* ===========================
     PART 3: Trigger Animations
  =========================== */
  
  // Animate box on button click
  const box = document.getElementById("animateBox");
  const triggerBtn = document.getElementById("triggerBtn");
  
  triggerBtn.addEventListener("click", () => {
    box.classList.add("animate");
  
    // remove after animation ends (reusable!)
    box.addEventListener("animationend", () => {
      box.classList.remove("animate");
    }, { once: true });
  });
  
  // Modal controls
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });
  
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  