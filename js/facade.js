function RegisterSupplier() {
    console.info("Entering RegisterSupplier");
    if (!DoValidate_frmAdd()) {
        console.error("Registration form Validation failed.");
    } else {
        console.info("Supplier Registration Form Validation is successful.");

        var type = $("#accountType").text().trim();
        var fName = $("#firstName").val().trim();
        var lName = $("#lastName").val().trim();
        var countryCode = $("#countryCode option:selected").val().trim();
        var phoneNumber = $("#phoneNumber").val().trim();
        var userEmail = $("#userEmail").val().trim();
        var city = $("#city").val().trim();
        var country = $("#country option:selected").val().trim();
        var addressDetails = $("#addressDetails").val().trim();
        var password = $("#password").val().trim();

        localStorage.setItem("type", type);
        localStorage.setItem("fName", fName);
        localStorage.setItem("lName", lName);
        localStorage.setItem("countryCode", countryCode);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
        localStorage.setItem("addressDetails", addressDetails);
        localStorage.setItem("password", password);

        var options = [userEmail];

        function callback(tx, results) {
            if (results.rows.length > 0) {
                var row = results.rows[0];
                console.info("Lookup email existence");

                var userEmail = localStorage.getItem("userEmail");

                if (row['userEmail'] === userEmail) {
                    var name = row['firstName'];

                    alert(name + "! your account is already registered!");
                }
            }

            if (results.rows.length === 0) {
                var firstName = localStorage.getItem("fName");

                alert(firstName + " your account is not registered!");
                alert("Confirm to submit your application!");
            }
        }

        InsertSupplier();
        SignupSupplier.existSupplier(callback, options);
    }
}

function InsertSupplier() {
    var accountType = localStorage.getItem("type");
    var firstName = localStorage.getItem("fName");
    var lastName = localStorage.getItem("lName");
    var countryCode = localStorage.getItem("countryCode");
    var phoneNumber = localStorage.getItem("phoneNumber");
    var userEmail = localStorage.getItem("userEmail");
    var city = localStorage.getItem("city");
    var country = localStorage.getItem("country");
    var addressDetails = localStorage.getItem("addressDetails");
    var password = localStorage.getItem("password");

    var options = [];
    options = [accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password];

    SignupSupplier.supplierInsert(options);
}

function LogInSupplier() {
    console.info("Entering LogInSupplier");

    if (DoValidate_frmLogIn()) {
        console.info("Supplier Login Form Validation is successful.");
        var userName = $("#userName").val().trim();
        var loginPassword = $("#loginPassword").val().trim();
        var registered = 0;

        function callback(tx, results) {
            console.info("Entering to callback");

            if (results.rows.length === 0) {
                window.alert("You have not registered yet!");
                console.info("Length is zero");
            } else {
                console.info("Length is not zero");
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];
                    if (row['userEmail'].trim() === userName && row['password'].trim() === loginPassword) {
                        registered++;

                        localStorage.setItem("supplierId", row['id']);
                        localStorage.setItem("accountType", row['accountType']);
                        localStorage.setItem("firstName", row['firstName']);
                        localStorage.setItem("lastName", row['lastName']);
                        localStorage.setItem("countryCode", row['countryCode']);
                        localStorage.setItem("phoneNumber", row['phoneNumber']);
                        localStorage.setItem("userEmail", row['userEmail']);
                        localStorage.setItem("city", row['city']);
                        localStorage.setItem("country", row['country']);
                        localStorage.setItem("addressDetails", row['addressDetails']);
                        localStorage.setItem("password", row['password']);
                    }
                }

                if (registered === 0) {
                    window.alert("You have not registered yet!");
                }
            }
        }

        SignInSupplier.selectAll(callback);
    } else {
        console.error("Log in form Validation failed.");
    }
}

function RegisterManufacturer() {
    console.info("Entering Business Registration");

    if (DoValidate_frmManufacturer()) {
        console.info("Business Registration Form Validation is successful.");

        var accountType = $("#accountType").text();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var companyName = $("#companyName").val();
        var companyUrl = $("#companyUrl").val();
        var bnNumber = $("#bnNumber").val();
        var contactTitle = $("#contactTitle").val();
        var contactFName = $("#contactFName").val();
        var contactLName = $("#contactLName").val();
        var countryCode = $("#countryCode option:selected").val();
        var phoneNumber = $("#phoneNumber").val();
        var cFaxNumber = $("#cFaxNumber").val();
        var userEmail = $("#userEmail").val();
        var city = $("#city").val();
        var country = $("#country option:selected").val();
        var addressDetails = $("#addressDetails").val();
        var cPostalCode = $("#cPostalCode").val();
        var cPassword = $("#cPassword").val();

        var options = [];
        options = [accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, cPassword];

        SignupManufacturer.manufacturerInsert(options);
    } else {
        console.error("Registration form Validation failed.");
    }
}

function LogInManufacturer() {
    console.info("Entering LogInManufacturer");

    if (DoValidate_frmLogInMan()) {
        console.info("Manufacturer Login Form Validation is successful.");
        var userName = $("#userName").val().trim();
        var loginPassword = $("#loginPassword").val().trim();
        var registered = 0;

        function callback(tx, results) {
            console.info("Entering to business callback");

            if (results.rows.length === 0) {
                window.alert("You have not registered business yet!");
                console.info("Business Length is zero");
            } else {
                console.info("Business Length is not zero");
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];
                    if (row['userEmail'].trim() === userName && row['cPassword'].trim() === loginPassword) {
                        registered++;

                        localStorage.setItem("manufacturerId", row['id']);
                        localStorage.setItem("accountType", row['accountType']);
                        localStorage.setItem("firstName", row['firstName']);
                        localStorage.setItem("lastName", row['lastName']);
                        localStorage.setItem("companyName", row['companyName']);
                        localStorage.setItem("companyUrl", row['companyUrl']);
                        localStorage.setItem("bnNumber", row['bnNumber']);
                        localStorage.setItem("contactTitle", row['contactTitle']);
                        localStorage.setItem("contactFName", row['contactFName']);
                        localStorage.setItem("contactLName", row['contactLName']);
                        localStorage.setItem("countryCode", row['countryCode']);
                        localStorage.setItem("phoneNumber", row['phoneNumber']);
                        localStorage.setItem("cFaxNumber", row['cFaxNumber']);
                        localStorage.setItem("userEmail", row['userEmail']);
                        localStorage.setItem("city", row['city']);
                        localStorage.setItem("country", row['country']);
                        localStorage.setItem("addressDetails", row['addressDetails']);
                        localStorage.setItem("cPostalCode", row['cPostalCode']);
                        localStorage.setItem("password", row['cPassword']);
                    }
                }

                if (registered === 0) {
                    window.alert("You have not registered yet!");
                }
            }
        }

        SignInManufacturer.selectAll(callback);
    } else {
        console.error("Log in form Validation failed.");
    }
}

function UpdateSetting() {
    if (DoValidate_frmUpdateSetting()) {
        console.info("Update Validation is successful");

        if (localStorage.getItem("accountType") === "Supplier") {
            var id = localStorage.getItem("supplierId");
        } else {
            var id = localStorage.getItem("manufacturerId");
            var companyName = localStorage.getItem("companyName");
            var companyUrl = localStorage.getItem("companyUrl");
            var bnNumber = localStorage.getItem("bnNumber");
            var contactTitle = localStorage.getItem("contactTitle");
            var contactFName = localStorage.getItem("contactFName");
            var contactLName = localStorage.getItem("contactLName");
            var cFaxNumber = localStorage.getItem("cFaxNumber");
            var cPostalCode = localStorage.getItem("cPostalCode");
        }

        var accountType = localStorage.getItem("accountType");
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var countryCode = $("#countryCode option:selected").val();
        var phoneNumber = $("#phoneNumber").val();
        var userEmail = $("#userEmail").val();
        var city = $("#city").val();
        var country = $("#country option:selected").val();
        var addressDetails = localStorage.getItem("addressDetails");
        var password = $("#password").val();

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("countryCode", countryCode);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
        localStorage.setItem("password", password);

        var updatedSetting = [];

        if (localStorage.getItem("accountType") === "Supplier") {
            updatedSetting = [accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password, id];
            SignupSupplier.supplierUpdate(updatedSetting);
        } else {
            updatedSetting = [accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, password, id];
            SignupManufacturer.manufacturerUpdate(updatedSetting);
        }
    }
}

function SaveProduct() {
    if (DoValidate_frmSaveProduct()) {

        var manufacturerId = localStorage.getItem("manufacturerId");

        var productImage = document.getElementById('myImage');
        var image = getBase64Image(productImage, 1024, 1024, 1);

        /*function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);

            var dataURL = canvas.toDataURL("image/png");

            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }*/

        //new code
        function getBase64Image(img, width, height, quality) {
            // Create a canvas element
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            // Get the 2D rendering context from the canvas
            var ctx = canvas.getContext("2d");

            // Draw the input image onto the canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Get the base64 encoded string representation of the image
            var dataURL = canvas.toDataURL("image/jpeg", quality);

            // Return the base64 encoded string, stripping off the header information
            return dataURL.replace(/^data:image\/(jpeg|jpg);base64,/, "");
        }
        //new code

        var name = $("#productName").val();
        var price = $("#productPrice").val();
        var categoryId = $("#category option:selected").val();
        var description = $("#description").val();

        var options = [];
        options = [manufacturerId, categoryId, image, name, price, description];

        SaveProductInfo.productInsert(options);
    }
}

function UpdateProductList(categoryId) {

    var categoryName = "";
    switch (categoryId) {
        case 1:
            categoryName = "Appliances";
            break;
        case 2:
            categoryName = "Autoparts";
            break;
        case 3:
            categoryName = "Furniture";
            break;
        case 4:
            categoryName = "Electronics";
            break;
        case 5:
            categoryName = "Jewelry";
            break;
        case 6:
            categoryName = "Beauty Supply";
            break;
        case 7:
            categoryName = "Clothes";
            break;
        case 8:
            categoryName = "Books";
            break;
        default:
            break;
    }

    localStorage.setItem("categoryName", categoryName);
    localStorage.setItem("categoryId", categoryId);
    $('#allCategories').hide();
    $("#categoryName").text(localStorage.getItem("categoryName"));

    var options = [categoryId];

    function callback(tx, results) {
        var htmlCode = "";
        var itemsNumber = 0;
        itemsNumber = results.rows.length;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var imgURL = "data:image/jpeg;base64," + row['image'];

            htmlCode += "<div class='col-md-4'>" +
                "<figure class='card card-product-grid'>" +
                "<div class='img-wrap'>" +
                "<span class='badge badge-danger'>" + "NEW" + "</span>" +
                "<img src='" + imgURL + "'>" +
                "<a href='#' class='btn-overlay' onclick='ViewItem(" + row['id'] + ")'>" + "<i class='fa fa-search-plus'>" + "</i>" + "Quick view" + "</a>" +
                "</div><!-- img-wrap.-->" +
                "<figcaption class='info-wrap'>" +
                "<div class='fix-height'>" +
                "<a href='page-product-detail.html' class='title'>" + row['name'] + "</a>" +
                "<p>" + row['description'] + "</p>" +
                "<div class='price-wrap mt-2'>" +
                "<span class='price'>" + row['price'] + "</span>" +
                "&nbsp;&nbsp;<del class='price-old' style='color:red;'>" + row['price'] * 1.50 + "</del>" +
                "</div><!-- price-wrap.// -->" +
                "</div>" +
                "<a href='#' class='btn btn-light btn-block' onclick='SaveToWishlist(" + row['id'] + ")'>" + "<i class='fa fa-heart'>" + "</i>" +
                "<span class='text'>" + "Add to Wish List" + "</span>" +
                "</a>" +
                "<a href='#' class='btn btn-block btn-primary' onclick='SaveOrder(" + row['id'] + ")'>" + "Add to cart" + "</a>" +
                "</figcaption>" +
                "</figure>" +
                "</div><!-- col.// -->";
        }

        var productList = $("#productList");
        productList = productList.html(htmlCode);

        localStorage.setItem("quantity", 1);

        var items = $(".items");
        items = items.text(itemsNumber + " Items found");
    }

    SaveProductInfo.selectCategory(callback, options);
}

function UpdatePopularProduct() {
    function callback(tx, results) {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var imgURL = "data:image/jpeg;base64," + row['image'];

            htmlCode += "<div class='col-md-3'>" +
                "<div href='#' class='card card-product-grid'>" +
                "<a href='#' class='img-wrap'>" +
                "<img src='" + imgURL + "'>" +
                "</a>" +
                "<figcaption class='info-wrap'>" +
                "<a href='#' class='title'>" + row['name'] +
                "</a>" +
                "<div class='price mt-1'>" + row['price'] +
                "</div><!-- price-wrap.// -->" +
                "</figcaption>" +
                "</div>" +
                "</div><!-- col.// -->";
        }

        var productList = $("#popularProduct");
        productList = productList.html(htmlCode);
    }

    SaveProductInfo.selectAll(callback);
}

function UpdateNavManufacturerList() {
    function callback(tx, results) {

        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<a class='dropdown-item' id='" + row['id'] + "' onclick='UpdateManufacturerProductList(" + row['id'] + ")'>" +
                row['companyName'] +
                "</a>";
        }

        var manufacturerList = $("#manufacturerList");
        manufacturerList = manufacturerList.html(htmlCode);
    }

    SignupManufacturer.selectAll(callback);
}

function UpdateNavCategoryList() {

    function callback(tx, results) {

        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<a class='dropdown-item' onclick='UpdateProductList(" + row['id'] + ")'>" +
                row['name'] +
                "</a>";
        }
        var categoryList = $("#categoryList");
        categoryList = categoryList.html(htmlCode);
    }

    GetCategories.selectAll(callback);
}

function UpdateLeftMenuCategory() {
    function callback(tx, results) {
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<li>" + "<a class='menu-category' onclick='UpdateProductList(" + row['id'] + ")'>" +
                row['name'] +
                "</a>" + "</li>";
        }

        var categoryList = $("#categoryMenu");
        categoryList = categoryList.html(htmlCode);
    }

    GetCategories.selectAll(callback);
}

function UpdateDropdownCategory() {
    function callback(tx, results) {
        $("#category").html("<option selected value=''>" + "Select" + "</option>");
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            $("#category").append("<option value='" + row['id'] + "'>" + row['name'] + "</option>");
        }
    }

    GetCategories.selectAll(callback);
}

function AllManufacturers() {

    var htmlCode = "";

    function callback(tx, results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlCode += "<div class='col-md-3'>" +
                "<div class='card card-category'>" +
                "<div class='img-wrap' style='background: #ffd7d7'>" +
                "<img src='images/manufacturers/" + row['id'] + ".jpg'>" +
                "</div>" +
                "<div class='card-body'>" +
                "<h4 class='card-title'>" + "<a class='manufacturerName' href='#' onclick='UpdateManufacturerProductList(" + row['id'] + ")'>" + row['companyName'] + "</a>" + "</h4>" +
                "<ul class='list-menu'>" +
                "<li>" + "<a href='#'>" + "</a>" + "</li>" +
                "</ul>" +
                "</div>" + "</div>" + "</div>";
        }

        var allManufacturers = $("#allManufacturers");
        allManufacturers = allManufacturers.html(htmlCode);
    }

    SignupManufacturer.selectAll(callback)
}

function UpdateManufacturerProductList(manufacturerId) {
    var options = [manufacturerId];

    var manufacturerName = document.getElementById(manufacturerId).innerHTML;
    localStorage.setItem("manufacturerName", manufacturerName);
    localStorage.setItem("manufacturerId", manufacturerId);
    $('#allManufacturers').hide();
    $("#manufacturerName").text(localStorage.getItem("manufacturerName"));

    function callback(tx, results) {
        var htmlCode = "";
        var itemsNumber = 0;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            itemsNumber = results.rows.length;

            var imgURL = "data:image/jpeg;base64," + row['image'];

            htmlCode += "<div class='col-md-4'>" +
                "<figure class='card card-product-grid'>" +
                "<div class='img-wrap'>" +
                "<span class='badge badge-danger'>" + "NEW" + "</span>" +
                "<img src='" + imgURL + "'>" +
                "<a class='btn-overlay' onclick='ViewItem(" + row['id'] + ")'>" + "<i class='fa fa-search-plus'>" + "</i>" + "Quick view" + "</a>" +
                "</div><!-- img-wrap.-->" +
                "<figcaption class='info-wrap'>" +
                "<div class='fix-height'>" +
                "<a href='page-product-detail.html' class='title'>" + row['name'] + "</a>" +
                "<p>" + row['description'] + "</p>" +
                "<div class='price-wrap mt-2'>" +
                "<span class='price'>" + row['price'] + "</span>" +
                "&nbsp;&nbsp;<del class='price-old' style='color:red;'>" + row['price'] * 1.50 + "</del>" +
                "</div><!-- price-wrap.// -->" +
                "</div>" +
                "<a href='#' class='btn btn-light btn-block' onclick='SaveToWishlist(" + row['id'] + ")'>" + "<i class='fa fa-heart'>" + "</i>" +
                "<span class='text'>" + "Add to Wish List" + "</span>" +
                "</a>" +
                "<a href='#' class='btn btn-block btn-primary' onclick='SaveOrder(" + row['id'] + ")'>" + "Add to cart" + "</a>" +
                "</figcaption>" +
                "</figure>" +
                "</div><!-- col.// -->";
        }

        var manufacturerProductList = $("#productList");
        manufacturerProductList = manufacturerProductList.html(htmlCode);

        localStorage.setItem("quantity", 1);

        var items = $(".items");
        items = items.text(itemsNumber + " Items found");
    }

    SaveProductInfo.selectManufacturer(callback, options);
}

function UpdateManufacturerSellingItems() {
    var manufacturerId = localStorage.getItem("manufacturerId");

    var options = [manufacturerId];

    function callback(tx, results) {
        var htmlCode = "";
        var itemsNumber = 0;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            itemsNumber = results.rows.length;

            var imgURL = "data:image/jpeg;base64," + row['image'];

            htmlCode += "<div class='col-md-4'>" +
                "<figure class='card card-product-grid'>" +
                "<div class='img-wrap'>" +
                "<img src='" + imgURL + "'>" +
                "</div><!-- img-wrap.// -->" +
                "<figcaption class='info-wrap'>" +
                "<a href='#' class='title mb-2'>" + row['description'] + "</a>" +
                "<div class='price-wrap mb-3'>" +
                "<span class='price'>" + row['price'] + "</span>" +
                "<small class='text-muted'>" + "/per item" + "</small>" +
                "</div><!-- price-wrap.// -->" +
                "<a href='#' class='btn btn-outline-primary' onclick='EditItem(" + row['id'] + ")'>" + "<i class='fa fa-pen'>" + "</i>" + " Edit " + "</a>" +
                "<a href='#' class='btn btn-primary' style='float: right;' onclick='ViewItem(" + row['id'] + ")'>" + "<i class='fa fa-eye'>" + "</i>" + " View " + "</a>" +
                "<hr>" +
                "<a href='#' class='btn btn-danger btn-block' onclick='DeleteItem(" + row['id'] + ")'>" + " Delete " + "</a>" +
                "</figcaption>" +
                "</figure>" +
                "</div><!-- col.// -->";
        }

        var manufacturerSellingItem = $("#sellingItem");
        manufacturerSellingItem = manufacturerSellingItem.html(htmlCode);

        var items = $(".items");
        items = items.text(itemsNumber + " Items found");
    }

    SaveProductInfo.selectManufacturer(callback, options);
}

function UpdateRecentProducts() {
    var manufacturerId = localStorage.getItem("manufacturerId");

    var options = [manufacturerId];

    function callback(tx, results) {
        var htmlCode = "";

        if (results.rows.length !== 0) {
            if (results.rows.length < 5) {
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];

                    var imgURL = "data:image/jpeg;base64," + row['image'];

                    htmlCode += "<div class='col-md-3'>" +
                        "<div href='#' class='card card-product-grid'>" +
                        "<a href='#' class='img-wrap'>" +
                        "<img src='" + imgURL + "'>" +
                        "</a>" +
                        "<figcaption class='info-wrap'>" +
                        "<a href='#' class='title'>" + row['name'] +
                        "</a>" +
                        "<div class='price mt-1'>" + row['price'] +
                        "</div><!-- price-wrap.// -->" +
                        "</figcaption>" +
                        "</div>" +
                        "</div><!-- col.// -->";
                }
            } else {
                for (var i = results.rows.length - 1; i > results.rows.length - 5; i--) {
                    var row = results.rows[i];

                    var imgURL = "data:image/jpeg;base64," + row['image'];

                    htmlCode += "<div class='col-md-3'>" +
                        "<div href='#' class='card card-product-grid'>" +
                        "<a href='#' class='img-wrap'>" +
                        "<img src='" + imgURL + "'>" +
                        "</a>" +
                        "<figcaption class='info-wrap'>" +
                        "<a href='#' class='title'>" + row['name'] +
                        "</a>" +
                        "<div class='price mt-1'>" + row['price'] +
                        "</div><!-- price-wrap.// -->" +
                        "</figcaption>" +
                        "</div>" +
                        "</div><!-- col.// -->";
                }
            }
        }

        var recentProduct = $("#recentProduct");
        recentProduct = recentProduct.html(htmlCode);
    }

    SaveProductInfo.selectManufacturer(callback, options);
}

function EditItem(productId) {

    console.info("Edit item method");

    var options = [productId];

    function callback(tx, results) {

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var productId = row['id'];
            var manufacturerId = row['manufacturerId'];
            var imgURL = row['image'];
            var name = row['name'];
            var price = row['price'];
            var description = row['description'];

            localStorage.setItem("productId", productId);
            localStorage.setItem("manufacturerId", manufacturerId);
            localStorage.setItem("image", imgURL);
            localStorage.setItem("name", name);
            localStorage.setItem("price", price);
            localStorage.setItem("description", description);
        }

        window.location.replace("page-product-update.html");
    }

    SaveProductInfo.selectProduct(callback, options);
}

function UpdateProduct() {
    if (DoValidate_frmUpdateProduct()) {
        console.info("Update Validation is successful");

        var id = localStorage.getItem("productId");
        var manufacturerId = localStorage.getItem("manufacturerId");
        var categoryId = $("#category option:selected").val();

        var productImage = document.getElementById("updateImage");
        var image = getBase64Image(productImage, 1024, 1024, 1);

        function getBase64Image(img, width, height, quality) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataURL = canvas.toDataURL("image/jpeg", quality);

            return dataURL.replace(/^data:image\/(jpeg|jpg);base64,/, "");
        }

        var name = $("#updateName").val();
        var price = $("#updatePrice").val();
        var description = $("#updateDescription").val();

        updatedProduct = [manufacturerId, categoryId, image, name, price, description, id];

        SaveProductInfo.productUpdate(updatedProduct);
    }
}

function DeleteItem(productId) {

    console.info("Delete item method");

    var options = [productId];
    console.info(productId);

    SaveProductInfo.productDelete(options);

}

function ViewItem(productId) {

    console.info("View item method");

    var options = [productId];

    function callback(tx, results) {

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var productId = row['id'];
            var manufacturerId = row['manufacturerId'];
            var imgURL = row['image'];
            var name = row['name'];
            var price = row['price'];
            var description = row['description'];

            localStorage.setItem("productId", productId);
            localStorage.setItem("manufacturerId", manufacturerId);
            localStorage.setItem("image", imgURL);
            localStorage.setItem("name", name);
            localStorage.setItem("price", price);
            localStorage.setItem("description", description);
            localStorage.setItem("quantity", 1);
        }

        window.location.replace("page-product-detail.html");
    }

    SaveProductInfo.selectProduct(callback, options);
}

function IncreaseQuantity() {
    var quantity = $("#quantity").val();
    quantity++;

    $("#quantity").val(quantity);

    localStorage.setItem("quantity", quantity);
}

function DecreaseQuantity() {
    var quantity = $("#quantity").val();

    if (quantity > 0) {
        quantity--;
        $("#quantity").val(quantity);
    }

    localStorage.setItem("quantity", quantity);
}

function SaveOrder(productId) {

    console.info("Save order method");

    if (localStorage.getItem("supplierId") === null) {
        alert("Please sign in first as Supplier!")
    } else {
        var supplierId = localStorage.getItem("supplierId");
        var quantity = localStorage.getItem("quantity");

        var options = [productId];

        function callback(tx, results) {

            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];

                var image = row['image'];
                var name = row['name'];
                var price = row['price'];
                var description = row['description'];
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                today = yyyy + '-' + mm + '-' + dd;
                var orderDate = today;
            }

            var orderOptions = [];
            orderOptions = [supplierId, image, name, price, description, quantity, orderDate];

            SaveOrderInfo.orderInsert(orderOptions);
        }

        SaveProductInfo.selectProduct(callback, options);
    }
}

function UpdateRecentOrders() {
    var supplierId = localStorage.getItem("supplierId");

    var options = [supplierId];

    function callback(tx, results) {
        var htmlCode = "";

        if (results.rows.length !== 0) {
            if (results.rows.length < 5) {
                for (var i = 0; i < results.rows.length; i++) {
                    var row = results.rows[i];

                    var imgURL = "data:image/png;base64," + row['image'];

                    htmlCode += "<div class='col-md-3'>" +
                        "<div href='#' class='card card-product-grid'>" +
                        "<a href='#' class='img-wrap'>" +
                        "<img src='" + imgURL + "'>" +
                        "</a>" +
                        "<figcaption class='info-wrap'>" +
                        "<a href='#' class='title'>" + row['name'] +
                        "</a>" +
                        "<div class='price mt-1'>" + row['price'] +
                        "</div><!-- price-wrap.// -->" +
                        "</figcaption>" +
                        "</div>" +
                        "</div><!-- col.// -->";
                }
            } else {
                for (var i = results.rows.length - 1; i > results.rows.length - 5; i--) {
                    var row = results.rows[i];

                    var imgURL = "data:image/jpeg;base64," + row['image'];

                    htmlCode += "<div class='col-md-3'>" +
                        "<div href='#' class='card card-product-grid'>" +
                        "<a href='#' class='img-wrap'>" +
                        "<img src='" + imgURL + "'>" +
                        "</a>" +
                        "<figcaption class='info-wrap'>" +
                        "<a href='#' class='title'>" + row['name'] +
                        "</a>" +
                        "<div class='price mt-1'>" + row['price'] +
                        "</div><!-- price-wrap.// -->" +
                        "</figcaption>" +
                        "</div>" +
                        "</div><!-- col.// -->";
                }
            }
        }

        var recentOrder = $("#recentOrder");
        recentOrder = recentOrder.html(htmlCode);
    }

    SaveOrderInfo.selectSupplier(callback, options);
}

function UpdateMyAddress() {
    if (localStorage.getItem("supplierId") !== null) {
        var supplierId = localStorage.getItem("supplierId");
        var options = [supplierId];
    } else {
        var manufacturerId = localStorage.getItem("manufacturerId");
        var options = [manufacturerId];
    }

    function callback(tx, results) {
        var htmlCode = "";

        if (results.rows.length !== 0) {
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += "<div class='col-md-6'>" +
                    "<article class='box mb-4'>" +
                    "<h6>" + row['city'] + ", " + row['country'] + "</h6>" +
                    "<p>" + row['addressDetails'] +
                    "<br>" +
                    "</p>" +
                    "<a href='#' class='btn btn-success'>" +
                    "<i class='fa fa-pen'>" +
                    "</i>" +
                    "</a>" + "&nbsp;" +
                    "<a href='#' class='btn btn-light'>" +
                    "<i class='text-danger fa fa-trash'>" +
                    "</i>" +
                    "</a>" +
                    "</article>" +
                    "</div>";
            }
            var myAddress = $("#myAddress");
            myAddress = myAddress.html(htmlCode);
        }
    }

    if (localStorage.getItem("supplierId") !== null) {
        SignInSupplier.supplierAddress(callback, options);
    } else {
        SignInManufacturer.manufacturerAddress(callback, options);
    }
}

function UpdateMyOrders() {
    if (localStorage.getItem("supplierId") !== null) {
        var supplierId = localStorage.getItem("supplierId");
        var options = [supplierId];
    }

    function callback(tx, results) {
        console.info("row num: " + results.rows.length);
        if (results.rows.length !== 0) {
            var htmlTable = "<tbody>";
            var subTotal = 0;
            var finalTotal = 0;
            var shippingFee = 0;
            var ordersNum = 0;

            var htmlCode = "<div class='col-md-8'>" +
                "<h6 class='text-muted'>" + "Delivery to" +
                "</h6>" +
                "<p>" + localStorage.getItem("firstName") + " " + localStorage.getItem("lastName") +
                "<br>" + "Phone: " + localStorage.getItem("phoneNumber") +
                "<br>" + "Email: " + localStorage.getItem("userEmail") +
                "<br>" + "Address: " + localStorage.getItem("addressDetails") + ", " +
                localStorage.getItem("city") + ", " + localStorage.getItem("country") +
                "</p>" +
                "</div>";

            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];

                ordersNum += row['quantity'];

                var imgURL = "data:image/png;base64," + row['image'];

                htmlTable += "<tr>" +
                    "<td width='90'>" + "<img src='" + imgURL + "'>" + "</td>" +
                    "<td>" + "<p class='title mb-0'>" + "Name: " + row['name'] + "</p>" + "</td>" +
                    "<td>" + "<p class='title mb-0'>" + "Quantity: " + row['quantity'] + "<span class='text-muted'>" + " - pcs" + "</span>" + "</p>" + "</td>" +
                    "<td>" + "<var class='title mb-0'>" + "Price: " + "$" + row['price'] + "</var>" + "<span class='text-muted'>" + "/per item" + "</span>" + "</td>" +
                    "<td>" + "<var class='title mb-0'>" + "Total price: " + "$" + row['price'] * row['quantity'] + "</var>" + "</td>" +
                    "<td>" + row['description'] + "</td>" +
                    "<td width='250'>" + "<a href='#' class='btn btn-outline-primary'>" + "Track order" + "</a>" + "&nbsp;" +
                    "<a href='#' class='btn btn-success' onclick='EditOrder(" + row['id'] + ")'>" + "<i class='fa fa-pen'>" + "</i>" + "</a>" + "&nbsp;" +
                    "<a href='#' class='btn btn-light' onclick='DeleteOrder(" + row['id'] + ")'>" + "<i class='text-danger fa fa-trash'>" + "</i>" + "</a>" + "</td>" +
                    "</div>" +
                    "</div>" +
                    "</td>" +
                    "</tr>";

                subTotal += row['price'] * row['quantity'];
            }
            var myOrders = $("#myOrders");
            myOrders = myOrders.html(htmlCode);

            var orderTable = $('#orderTable');
            htmlTable = htmlTable + "</tbody>";
            orderTable = orderTable.html(htmlTable);

            var ordersNumber = $('#ordersNumber');
            ordersNumber = ordersNumber.text(ordersNum);

            var totalOrders = $('#totalOrders');
            totalOrders = totalOrders.text(ordersNum);

            var myOrderId = $("#orderId");
            myOrderId = myOrderId.text("Order ID: " + localStorage.getItem("supplierId") + Date.now());

            var myOrderDate = $("#orderDate");
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            today = yyyy + '-' + mm + '-' + dd;
            myOrderDate = myOrderDate.text("Order Date: " + today);

            var mySubTotal = $("#subTotal");
            mySubTotal = mySubTotal.text("Subtotal: $" + subTotal);

            shippingFee = subTotal * 0.015;
            var myShippingFee = $("#shippingFee");
            myShippingFee = myShippingFee.text("Shipping fee: $" + shippingFee);

            finalTotal = subTotal + shippingFee;
            var myFinalTotal = $("#finalTotal");
            myFinalTotal = myFinalTotal.text("Total: $" + finalTotal);
        }
    }

    if (localStorage.getItem("supplierId") !== null) {
        SaveOrderInfo.selectSupplier(callback, options);
    }
}

function EditOrder(orderId) {
    console.info("Edit order method");
    localStorage.setItem("orderId", orderId);

    var options = [orderId];

    function callback(tx, results) {

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var supplierId = row['supplierId'];
            var imgURL = row['image'];
            var name = row['name'];
            var price = row['price'];
            var description = row['description'];
            var quantity = row['quantity'];
            var orderDate = row['orderDate'];

            localStorage.setItem("supplierId", supplierId);
            localStorage.setItem("image", imgURL);
            localStorage.setItem("name", name);
            localStorage.setItem("price", price);
            localStorage.setItem("description", description);
            localStorage.setItem("quantity", quantity);
            localStorage.setItem("orderDate", orderDate);
        }

        window.location.replace("page-order-update.html");
    }

    SaveOrderInfo.select(callback, options);
}

function UpdateOrder() {

    var id = localStorage.getItem("orderId");
    var supplierId = localStorage.getItem("supplierId");
    var image = localStorage.getItem("image");

    var name = $("#updateName").text();
    var price = $("#updatePrice").text();
    var description = $("#updateDescription").text();

    var quantity = localStorage.getItem("quantity");
    var orderDate = localStorage.getItem("orderDate");

    updatedOrder = [supplierId, image, name, price, description, quantity, orderDate, id];

    SaveOrderInfo.orderUpdate(updatedOrder);
}

function DeleteOrder(orderId) {

    console.info("Delete order method");

    var options = [orderId];
    console.info(orderId);

    SaveOrderInfo.orderDelete(options);
}

function SaveToWishlist(id) {

    console.info("Save Wish List method");

    if (localStorage.getItem("supplierId") === null) {
        alert("Please sign in first as Supplier!")
    } else {
        var supplierId = localStorage.getItem("supplierId");

        var options = [id];

        function callback(tx, results) {

            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];

                var image = row['image'];
                var name = row['name'];
                var price = row['price'];
                var description = row['description'];
            }

            var wishOptions = [];
            wishOptions = [supplierId, image, name, price, description];

            SaveWishlist.productInsert(wishOptions);
        }

        SaveProductInfo.selectProduct(callback, options);
    }
}

function UpdateWishList() {
    function callback(tx, results) {
        var htmlCode = "";
        var totalWishes = results.rows.length;

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            var imgURL = "data:image/jpeg;base64," + row['image'];

            htmlCode += "<div class='col-md-6'>" +
                "<figure class='itemside mb-4'>" +
                "<div class='aside'>" +
                "<img src='" + imgURL + "' class='border img-md'>" +
                "</div>" +
                "<figcaption class='info'>" +
                "<a href='#' class='title'>" + row['name'] + "</a>" +
                "<p class='price mb-2'>" + row['price'] + "</p>" +
                "<a href='#' class='btn btn-secondary btn-sm' onclick='SaveOrder(" + row['id'] + ")'>" + "Add to cart" + "</a>" + "&nbsp;" +
                "<a href='#' class='btn btn-danger btn-sm' onclick='DeleteWish(" + row['id'] + ")'>" +
                "<span>" + "Remove from wishlist" + "</span>" +
                "</a>" +
                "</figcaption>" +
                "</figure>" +
                "</div>";
        }

        var total = $("#totalWishes");
        total = total.html(totalWishes);

        var wishlist = $("#wishlist");
        wishlist = wishlist.html(htmlCode);
    }

    SaveWishlist.selectAll(callback);
}

function DeleteWish(id) {

    console.info("Delete order method");

    var options = [id];
    console.info(id);

    SaveWishlist.productDelete(options);
}
