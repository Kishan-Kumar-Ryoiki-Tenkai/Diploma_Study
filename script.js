function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('show');
}

window.onload = function() {
            alert("Welcome to the Diploma Study website and Explore the little world of study materials, where learning becomes easier, smarter, and more exciting every day. 🚀📚 ");
};

function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(); // e.g., "6/14/2025"
  const time = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
  document.getElementById('datetime').innerHTML = `${date} ${time}`;
}

    updateDateTime();
    
    setInterval(updateDateTime, 1000);