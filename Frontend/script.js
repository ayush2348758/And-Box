document.addEventListener('DOMContentLoaded', function() {
    // Search bar functionality
    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.querySelector('.search-form');

    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from closing the search bar immediately
        searchForm.classList.toggle('active'); // Toggle the search bar visibility
    });

    // Optionally close search bar when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchIcon.contains(event.target) && !searchForm.contains(event.target)) {
            searchForm.classList.remove('active');
        }
    });

    // Category filtering functionality
    const categories = document.querySelectorAll('.category');
    const products = document.querySelectorAll('.product');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Update category active class
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');

            // Filter products based on selected category
            products.forEach(product => {
                if (filter === 'all' || product.classList.contains(filter)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Automatically show Netflix Certified products on page load
    showCategory('netflix-certified');
});

function showCategory(category) {
    const products = document.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        products[i].style.display = "none"; // Hide all products first
    }

    const selectedProducts = document.getElementsByClassName(category);
    for (let i = 0; i < selectedProducts.length; i++) {
        selectedProducts[i].style.display = "block"; // Show selected category
    }
}
