function btnRegister_click() {
    RegisterSupplier();
}

function btnRegisterBusiness_click() {
    RegisterManufacturer();
}

function btnLogIn_click() {
    LogInSupplier();
}

function btnLogInMan_click() {
    LogInManufacturer();
}

function btnSaveProduct_click() {
    SaveProduct();
}

function btnUpdateProduct_click() {
    UpdateProduct();
}

function btnUpdateOrder_click() {
    UpdateOrder();
}

function btnPlus_click() {
    IncreaseQuantity();
}

function btnMinus_click() {
    DecreaseQuantity();
}

$(document).ready(function () {

    /*$("form").submit(function (event) {
        event.preventDefault(); // prevent the form from submitting
        var searchTerm = $("#search").val(); // get the value of the search field

        // perform the search using the searchTerm variable
        var results = search(searchTerm); // assume search() is a function that performs the search and returns the results

        // display the results
        $("#results").html(results);
    });*/

    // Select the search form and the search input field
    var searchForm = $('#search-form');
    var searchInput = $('#search-input');

    // When the search form is submitted
    searchForm.submit(function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the search query from the search input field
        var searchQuery = searchInput.val();

        // Perform the search using the search query
        search(searchQuery);
    });

    function search(query) {
        // Send an AJAX request to the search API with the search query
        $.ajax({
            url: '/api/search',
            data: {
                q: query
            },
            success: function (results) {
                // When the search is successful, display the search results
                displayResults(results);
            }
        });
    }

    function displayResults(results) {
        // Clear the search results container
        $('#search-results').empty();

        // Iterate over the search results
        for (var i = 0; i < results.length; i++) {
            // Get the current result
            var result = results[i];

            // Create a new product card for the result
            var productCard = $('<div class="product-card"></div>');

            // Set the product card's title to the result's name
            productCard.append('<h2 class="product-title">' + result.name + '</h2>');

            // Set the product card's image to the result's image
            productCard.append('<img class="product-image" src="' + result.image + '">');

            // Set the product card's price to the result's price
            productCard.append('<div class="product-price">' + result.price + '</div>');

            // Add the product card to the search results container
            $('#search-results').append(productCard);
        }
    }
});

function updateAllList_show() {
    UpdatePopularProduct();
    UpdateNavManufacturerList();
    AllManufacturers();
    UpdateNavCategoryList();
    UpdateLeftMenuCategory();
    UpdateDropdownCategory();
    UpdateRecentProducts();
    UpdateRecentOrders();
    UpdateManufacturerSellingItems();
    UpdateMyAddress();
    UpdateMyOrders();
    UpdateWishList();
}

function init() {
    console.info("DOM is ready");

    $('#customCheck1').click(function () {
        if ($('#submitBtn').is(':disabled')) {
            $('#submitBtn').removeAttr('disabled');
        } else {
            $('#submitBtn').attr('disabled', 'disabled');
        }
    });

    $('#customCheck2').click(function () {
        if ($('#saveBtn').is(':disabled')) {
            $('#saveBtn').removeAttr('disabled');
        } else {
            $('#saveBtn').attr('disabled', 'disabled');
        }
    });

    $("#submitBtn").on("click", btnRegister_click);

    $("#saveBtn").on("click", btnRegisterBusiness_click);

    $("#logInBtn").on("click", btnLogIn_click);

    $("#logInManBtn").on("click", btnLogInMan_click);

    $("#saveProduct").on("click", btnSaveProduct_click);

    $("#updateProduct").on("click", btnUpdateProduct_click);

    $("#updateOrder").on("click", btnUpdateOrder_click);

    $("#button-plus").on("click", btnPlus_click);

    $("#button-minus").on("click", btnMinus_click);

    window.onload = function () {
        updateAllList_show();
    };
}

function initDB() {
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables...");
            DB.createTables();
        } else {
            console.error("Error: Cannot create tables: database does not exist");
        }
    } catch (e) {
        console.error("Error: (Fatal) error in initDB(). Can not proceed.");
    }
}

$(document).ready(function () {
    init();
    initDB();
}); 
