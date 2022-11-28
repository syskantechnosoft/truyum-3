function editItem() {

    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
   // var price = PriceNotFixed.toFixed(2).toString();
    var active ;


    if(document.getElementById("activeYes").checked)
    {
        active = "Yes";
    }
    if(document.getElementById("activeNo").checked)
    {
        active = "No";
    }

    var dateOfLaunch = document.getElementById("dateOfLaunch").value;
    var category = document.getElementById("category").value;
    const checkDelivery = document.querySelector('#freeDelivery') !== null;
    var delivery;

    if(checkDelivery==true)
    {
        delivery="Yes";
    }
    if(checkDelivery==false)
    {
        delivery="No";
    }

    var tableRow = "<tr>"
                    + "<td>" + title + "</td>"
                    + "<td>" + price + "</td>"
                    + "<td>" + active + "</td>"
                    + "<td>" + dateOfLaunch + "</td>"
                    + "<td>" + category + "</td>"
                    + "<td>" + delivery + "</td>"
                    + "<td><a href='edit-menu-Item.html' class='edit'>Edit</a></td>"
                  + "</tr>";
                  
    console.log(tableRow);
    debugger;
    document.getElementById("tblbody").innerHTML = tableRow;
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("dateOfLaunch").value = "";
    alert ("Saved");
}

function deleteItem() {
    //not finished
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("dateOfLaunch").value = "";
    alert ("Deleted");
}

