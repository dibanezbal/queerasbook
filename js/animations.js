document.addEventListener('DOMContentLoaded', function() {
    let checkboxes = document.querySelectorAll('.dropdown-arrow');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function(){
            let filterContainer = this.parentElement;
            let dropdown = filterContainer.querySelector('.filter-dropdown');

            dropdown.classList.toggle('checked');
            console.log(dropdown);
            
            
        })
    });
});