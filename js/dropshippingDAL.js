var SignupSupplier = {

    supplierInsert: function(options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Supplier registration has been successful");

            window.location.replace("page-user-login.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table");

            sql = "INSERT INTO suppliers(accountType, firstName, lastName, countryCode, phoneNumber, userEmail, city, country, addressDetails, password) VALUES(?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("Data added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM suppliers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignupManufacturer = {

    manufacturerInsert: function(options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Manufacturer registration has been successful");

            window.location.replace("page-manufacturer-login.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting into table business info");

            sql = "INSERT INTO manufacturers(accountType, firstName, lastName, companyName, companyUrl, bnNumber, contactTitle, contactFName, contactLName, countryCode, phoneNumber, cFaxNumber, userEmail, city, country, addressDetails, cPostalCode, cPassword) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("Business data added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all business Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all business records...");

            var sql = "SELECT * FROM manufacturers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignInSupplier = {

    selectedSupplier: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successRegistered() {
            console.info("Success: Log in successful");
            alert("Registered supplier!");
            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting a Supplier...  ");
            var sql = "SELECT * FROM suppliers WHERE id=?;";

            tx.executeSql(sql, options, callback, successRegistered, errorHandler);
            console.info("Data found...");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    supplierAddress: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successRegistered() {
            console.info("Success: Address found successful");
        }

        function txFunction(tx) {
            console.info("Selecting a Supplier...  ");
            var sql = "SELECT * FROM suppliers WHERE id=?;";

            tx.executeSql(sql, options, callback, successRegistered, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
            alert("Registered supplier!");
            window.alert("You logged in successfully");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM suppliers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SignInManufacturer = {

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
            alert("Registered manufacturer!");
            window.alert("You logged in successfully");

            window.location.replace("index.html");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM manufacturers;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SaveProductInfo = {

    productInsert: function(options) {
        function successInsertTransaction() {
            console.info("Success: Insert Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("Saving product has been successful");

            window.location.replace("page-product-info.html");
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting products into table");
            sql = "INSERT INTO products(manufacturerId, categoryId, image, name, price, description) VALUES(?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("product added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM products;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectProduct: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a product...");
            var sql = "SELECT * FROM products WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },


    selectCategory: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a category's products...");
            var sql = "SELECT * FROM products WHERE categoryId=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectManufacturer: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a manufacturer's products...");
            var sql = "SELECT * FROM products WHERE manufacturerId=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    productUpdate: function(options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Product updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating...  ");
            var sql = "";
            sql = "UPDATE products " +
                "SET manufacturerId=? , categoryId=?, image=?, name=?, price=?, description=?" +
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    productDelete: function(options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Product deleted successfully");

            window.location.reload();
        }

        function txFunction(tx) {
            console.info("Deleting from products...  ");
            var sql = "";
            sql = "DELETE FROM products " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var GetCategories = {

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all categories...");

            var sql = "SELECT * FROM categories;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

};

var SaveOrderInfo = {

    orderInsert: function(options) {
        function successInsertTransaction() {
            console.info("Success: Insert Order Transaction successful");
        }

        function successInsert() {
            console.info("Success: Order Insert successful");
            alert("Saving order has been successful");

            window.location.reload();
        }

        function txFunction(tx) {
            var sql = "";
            console.info("Start inserting orders into table");
            sql = "INSERT INTO orders(supplierId, image, name, price, description, quantity, orderDate) VALUES(?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);

            console.info("order added");
        }

        db.transaction(txFunction, errorHandler, successInsertTransaction);
    },

    selectAll: function(callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Select all Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records...");

            var sql = "SELECT * FROM orders;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    select: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting an order's details...");
            var sql = "SELECT * FROM orders WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    selectSupplier: function(callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a supplier's orders...");
            var sql = "SELECT * FROM orders WHERE supplierId=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
};