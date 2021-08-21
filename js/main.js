let btnGenera = document.getElementById("btn-genera");

btnGenera.addEventListener('click', function () {
    //Array con i dati del viaggio
    let data = userData();
    console.log(data);
    //Popolo la div 
    let ticket = printTicket(data);
})

/*  
    ========================================================================================================
        1.                           Creo un array con i dati del form
    ========================================================================================================
    
*/

function userData() {
    let userData = [];
    userData["name"] = document.getElementById("name").value;
    userData["KM"] = document.getElementById("km").value;
    userData["adultOrMinor"] = document.getElementById("adultOrMinor").value;
    userData["van"] = Math.floor((Math.random() * 9));
    userData["trainCode"] = Math.floor((Math.random() * 100000) + 90000);
    userData["priceTrain"] = Math.ceil(document.getElementById("km").value * 0.21);
    return userData;

}

/*  
    ========================================================================================================
        2.                           Popola la div con i dati del biglietto 
    ========================================================================================================
    
*/

function printTicket(data) {
    
    let userName = document.getElementById("userName");
    let age = document.getElementById("age");
    let van = document.getElementById("van");
    let idTrain = document.getElementById("idTrain");
    let price = document.getElementById("price");
    //Populate
    userName.innerHTML = data["name"];
    age.innerHTML = data["adultOrMinor"];
    idTrain.innerHTML = data["trainCode"];
    van.innerHTML = data["van"];
    price.innerHTML = data["priceTrain"]

    //Show div
    let ticket = document.getElementById("your-ticket");
    ticket.classList.remove('d-none');

}