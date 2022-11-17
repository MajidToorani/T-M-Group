var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    createDatabase: function() {
        var shortName = "DropShipping";
        var version = "1.0";
        var displayName = "DB for T&M Drop Shipping website";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },
    createTables: function() {

        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successCreate() {
            console.info("Success: Create Table successful. ");
        }

        function successInsert() {
            console.info("Success: Data insert successful");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================

            //don't want to drop any table now. only if necessary.
            //=====================================================
            //console.info("Dropping Table suppliers if exists...");
            //var sqlDropUser = "DROP TABLE IF EXISTS suppliers;";

            //tx.executeSql(sqlDropUser, options, successDrop, errorHandler);

            //console.info("Dropping Table products if exists...");
            //var sqlDropProduct = "DROP TABLE IF EXISTS products;";

            //tx.executeSql(sqlDropProduct, options, successDrop, errorHandler);
            //=====================================================
            //uncomment if necessary

            // Create table users
            console.info("Creating Table: suppliers...");
            var sqlCreateUser = "CREATE TABLE IF NOT EXISTS suppliers(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "accountType VARCHAR(20) NOT NULL," +
                "firstName VARCHAR(50) NOT NULL," +
                "lastName VARCHAR(50) NOT NULL," +
                "countryCode VARCHAR(5) NOT NULL," +
                "phoneNumber VARCHAR(10) NOT NULL," +
                "userEmail VARCHAR(50) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "country VARCHAR(20) NOT NULL," +
                "addressDetails VARCHAR(100) NOT NULL," +
                "password VARCHAR(50) NOT NULL);";
            tx.executeSql(sqlCreateUser, options, successCreate, errorHandler);

            // Create table product
            console.info("Creating Table: products...");
            var sqlCreateProducts = "CREATE TABLE IF NOT EXISTS products(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "manufacturerId INTEGER NOT NULL," +
                "categoryId INTEGER NOT NULL," +
                "image BLOB," +
                "name VARCHAR(50) NOT NULL," +
                "price INT NOT NULL," +
                "description VARCHAR(100) NOT NULL," +
                "FOREIGN KEY(manufacturerId) REFERENCES manufacturers(id)," +
                "FOREIGN KEY(categoryId) REFERENCES categories(id));";
            tx.executeSql(sqlCreateProducts, options, successCreate, errorHandler);

            // Create table manufacturer
            console.info("Creating Table: manufacturers...");
            var sqlManufacturer = "CREATE TABLE IF NOT EXISTS manufacturers(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "accountType VARCHAR(20) NOT NULL," +
                "firstName VARCHAR(50) NOT NULL," +
                "lastName VARCHAR(50) NOT NULL," +
                "companyName VARCHAR(50) NOT NULL," +
                "companyUrl VARCHAR(50)," +
                "bnNumber VARCHAR(30) NOT NULL," +
                "contactTitle VARCHAR(30)," +
                "contactFName VARCHAR(50) NOT NULL," +
                "contactLName VARCHAR(50) NOT NULL," +
                "countryCode VARCHAR(5) NOT NULL," +
                "phoneNumber VARCHAR(20) NOT NULL," +
                "cFaxNumber VARCHAR(20)," +
                "userEmail VARCHAR(50) NOT NULL," +
                "city VARCHAR(20) NOT NULL," +
                "country VARCHAR(20) NOT NULL," +
                "addressDetails VARCHAR(100) NOT NULL," +
                "cPostalCode VARCHAR(10) NOT NULL," +
                "cPassword VARCHAR(50) NOT NULL);";
            tx.executeSql(sqlManufacturer, options, successCreate, errorHandler);

            // Create table payment
            console.info("Creating Table: payment...");
            var sqlPayment = "CREATE TABLE IF NOT EXISTS payment(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "paymentType VARCHAR(10) NOT NULL);";
            tx.executeSql(sqlPayment, options, successCreate, errorHandler);

            // Create table orderDetails
            console.info("Creating Table: orderDetails...");
            var sqlOrderDetails = "CREATE TABLE IF NOT EXISTS orderDetails(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "productId INTEGER NOT NULL," +
                "orderId INTEGER NOT NULL," +
                "orderNumber VARCHAR(30) NOT NULL," +
                "price INT NOT NULL," +
                "quantity INT NOT NULL," +
                "discount INT NOT NULL," +
                "total INT NOT NULL," +
                "size VARCHAR(10)," +
                "color VARCHAR(20)," +
                "shipDate DATE," +
                "FOREIGN KEY(productId) REFERENCES products(id)," +
                "FOREIGN KEY(orderId) REFERENCES orders(id));";
            tx.executeSql(sqlOrderDetails, options, successCreate, errorHandler);

            // Create table order
            console.info("Creating Table: orders...");
            var sqlOrder = "CREATE TABLE IF NOT EXISTS orders(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "supplierId INTEGER NOT NULL," +
                "image BLOB," +
                "name VARCHAR(50) NOT NULL," +
                "price INT NOT NULL," +
                "description VARCHAR(100) NOT NULL," +
                "quantity INT NOT NULL," +
                "orderDate DATE NOT NULL," +
                "FOREIGN KEY(supplierId) REFERENCES suppliers(id));";
            tx.executeSql(sqlOrder, options, successCreate, errorHandler);

            // Drop table categories if exist
            console.info("Dropping Table categories if exists...");
            var sqlDropCategory = "DROP TABLE IF EXISTS categories;";
            tx.executeSql(sqlDropCategory, options, successDrop, errorHandler);

            // Create table categories
            console.info("Creating Table: categories...");
            var sqlCategory = "CREATE TABLE IF NOT EXISTS categories(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(50) NOT NULL," +
                "description VARCHAR(200) NOT NULL);";
            tx.executeSql(sqlCategory, options, successCreate, errorHandler);

            console.info("Inserting data to Table categories...");
            var sqlInsertCategories = ["INSERT INTO categories(name, description) VALUES('Appliance', 'fridge-stove-dishwasher');",
                " INSERT INTO categories(name, description) VALUES('Autopart', 'vehicles accessories');",
                " INSERT INTO categories(name, description) VALUES('Furniture', 'sofa-chair-dining tables-beds');",
                " INSERT INTO categories(name, description) VALUES('Electronic', 'cables-lights');",
                " INSERT INTO categories(name, description) VALUES('Jewelry', 'neckless-earing-bracelet');",
                " INSERT INTO categories(name, description) VALUES('Beauty Supply', 'makeup-skin care');",
                " INSERT INTO categories(name, description) VALUES('Cloth', 'shirts-pants-jeans-coats');",
                " INSERT INTO categories(name, description) VALUES('Book', 'Action and Adventure-Classics-Comic or Garphic Novel-Historical Fiction-Horror');"
            ];

            for (var i = 0; i < sqlInsertCategories.length; i++) {
                tx.executeSql(sqlInsertCategories[i], options, successInsert, errorHandler);

            }
         
            // Create table wish list
            console.info("Creating Table: wish list...");
            var sqlWishlist = "CREATE TABLE IF NOT EXISTS wishList(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "supplierId INTEGER NOT NULL," +
                "image BLOB," +
                "name VARCHAR(50) NOT NULL," +
                "price INT NOT NULL," +
                "description VARCHAR(100) NOT NULL," +
                "FOREIGN KEY(supplierId) REFERENCES suppliers(id));";
            tx.executeSql(sqlWishlist, options, successCreate, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    dropTables: function() {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================
            console.info("Dropping Table: suppliers...");
            var sqlUser = "DROP TABLE IF EXISTS suppliers;";

            tx.executeSql(sqlUser, options, successDrop, errorHandler);
            //=====================================================
            console.info("Dropping Table: products...");
            var sqlProduct = "DROP TABLE IF EXISTS products;";

            tx.executeSql(sqlProduct, options, successDrop, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
