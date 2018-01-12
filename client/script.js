    document.addEventListener("DOMContentLoaded", function() {
    let country = document.querySelector("#country");
    let cv = document.querySelector("#CV");
    let button = document.querySelector("#submit");
    let form = document.querySelector("#myForm");
    let inData = document.querySelector("#inData");
    let addNewData = document.querySelector("#addData");
    let message = document.querySelector("#message");
    let radioButton1 = document.querySelector("#b1");
    let radioButton2 = document.querySelector("#b2");
    let list = document.querySelector("#selection");
    let dataList = document.querySelector("#countries");
    
    
    // Receiving data and saving as input options 
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/api/countries.json");
    request.onload = function () {
        let originalJSON = JSON.parse(request.responseText);
        for(city of originalJSON) {
            let tag = document.createElement("option");
            tag.textContent = city.name;
            dataList.appendChild(tag);
            
        }
    }
        request.send();
    
        // Function checks if option is selected
       function isChecked(item) { 
           if(item.checked) {
               return true;
           } else {
               return false;
           }
       };
    
    
       // Saving selected data on a server
       button.addEventListener("click", function(e) {
           e.preventDefault();
           let file = {
               "SelectedCountry": list.value,
               "CheckBoxInData" : isChecked(inData),
               "CheckBoxAddData" : isChecked(addNewData),
               "RadioButton 1" : isChecked(radioButton1),
               "RadioButton 2" : isChecked(radioButton2),
               
           };
           let fileJSON = JSON.stringify(file);
           let fileServer = new XMLHttpRequest();
           fileServer.open("POST", "http://localhost:3000/api/form");
           fileServer.setRequestHeader("Content-type", "application/json","charset=utf-8");
           
           fileServer.send(fileJSON);
       }) 
    });