// creates new table row and appends to parent table
function tr() {
    var row = document.createElement("tr");
    document.getElementById("image-con").appendChild(row);
    row.style.display = "flex";
}

// creates new table data cell and appends to parent row
function td(image) {
    var cell = document.createElement("td");
    document.getElementById("image-con").lastChild.appendChild(cell);
    cell.style.backgroundImage = image;
    cell.style.backgroundRepeat = "no-repeat";
    cell.style.backgroundPosition = "center";
    cell.style.height = "12em";
    cell.style.width = "15em";
}

// function converts from naira to kobo and deducts from initial total amount
function Coins() {
    var amount = Number(prompt("Please enter an amount in naira (e.g 10, or 10.5 or 10.50)..."));
    var caption = "The minimum number of coins that can be used to make " + amount + " naira are: ";
    amount = Math.floor(amount*100);
    document.getElementById("placeholder").innerHTML = caption;

    var dict = {
        200: "url('CoinAssets/twohundredkobo.jpg')",
        100: "url('CoinAssets/hundredkobo.jpg')",
        50: "url('CoinAssets/fiftykobo.jpg')",
        20: "url('CoinAssets/twentykobo.jpg')",
        10: "url('CoinAssets/tenkobo.jpg')",
        5: "url('CoinAssets/fivekobo.jpg')",
        2: "url('CoinAssets/twokobo.jpg')",
        1: "url('CoinAssets/onekobo.jpg')"
    };
    var list = [200, 100, 50, 20, 10, 5, 2, 1];
    var i=0;

    for (var key = 0; key < list.length; key++) {
        while (Math.floor(amount/list[key]) >= 1 && amount!=0) {
            
            // new table row after 6 columns
            if (i%6==0) {
            tr();
            }
            i++;
            
            td(dict[list[key]]);
            amount-=list[key];
        }
        if (amount==0) {
            break;
        }
    }
}