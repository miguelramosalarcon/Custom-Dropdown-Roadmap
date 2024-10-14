document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuItems = dropdownMenu.querySelectorAll('li');
    const dropdownIcon = dropdownButton.querySelector('.dropdown-icon');
    
    // Dropdown visible
    dropdownButton.addEventListener('click', () => {
      const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
      dropdownButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.classList.toggle('show');
    });
  
    // item selection
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        // Mantén el ícono de flecha y solo cambia el texto
        dropdownButton.childNodes[0].textContent = this.childNodes[0].textContent;
        
        // Remueve la clase "selected" de todos los elementos
        menuItems.forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');  // Añade clase "selected" al item seleccionado
        
        dropdownMenu.classList.remove('show');
        dropdownButton.setAttribute('aria-expanded', 'false');
      });
  
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          this.click();
        }
      });
    });
  
    // Close the dropdown
    document.addEventListener('click', function (e) {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        dropdownButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
