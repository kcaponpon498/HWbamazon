// * * * * * * * * * * * STEPS TO COMPLETE HOMEWORK  * * * * * * * * * * * 
// Step 1: Create MySQL Database called "bamazon" || DONE           
// Step 2: Create a table called "products" in bamazon database || DONE      
// Step 3: Create 5 columns in the products table: "item_id",     
// "product_name", "department_name", "price", and "stock_quanity" || DONE      
// Step 4: Create 10 mock items in the products table || DONE                 
// Step 5: Create Node app called "bamazonCustomer.js" || DONE                   
// Step 6: Require mysql and inquirer in bamazonCustomer.js || DONE            
// Step 7: Create a connection between bamazon database               
// and bamazonCustomer.js || DONE                                          
// Step 8: Two prompt messages, 1) ask the ID of product they would       
// like to buy 2) how many units they would like to buy                   
// Step 9: Create if/else statement to see if they are enough products    
// Step 10: If they do have enough, fulfill the customer's order          
// on how much their total is                                             
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // PORT 
    port: 3306,
    // USER NAME 
    user: "root",
    // DATABASE NAME
    database: "bamazon_db"
    // PASSWORD
    // password: "";
});

//"Please product would you like to buy by selecting the item's ID?",
"How much would you like to buy?"
// Successfully connected MySQL and Node
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connect to mySQL with id: " + connection.threadId)
});

// STEP 8 BELOW 
function buyProduct(product_name, department_name, price, stock_quantity) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "item_id",
                message: "Please enter the ID of the item that you would like to buy.",
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to buy?"
            }
        ])
        .then(function(answer) {
            switch (answer.item_id) {
                case "Please enter the ID of the item that you would like to buy.":
                buyProduct();
                break;

                case "How many would you like to buy?":
                buyItem();
                break;
            }
        });
        }

  function buyItem()