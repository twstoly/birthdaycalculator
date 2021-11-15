

var isChecked = document.getElementById("validationFormCheck2").checked == false;

function calculateBirthday(){

    //Get months days from the calendar
    var days = document.getElementById("day").value;
    var day  = parseInt(days)


    // Checking for the validity of the items entered..
    if(days <= 0 || days >31){
        alert("You have entered an Invalid Day.")
        document.getElementById("dateFeedback").innerHTML = "You have entered an Invalid Day";
    }; 
    if(months <= 0 || months > 12 ){
        alert("You are out of range. there is no space for anothre month innovation or discovery?");
        document.getElementById("monthFeedback").innerHTML = "You are out of range. there is no space for another month innovation or discovery?";
    }; 

    if(year <= 1000 || year > 2021 ){
        alert("You are out of range.");
        document.getElementById("yearFeedback").innerHTML = "Are you sure of your age buddy?";
    }

    //Get months value from the calendar
    var months = document.getElementById("month").value;

    if(months == 1){
        mewMonthsValue = 13
    }else if(months == 2){
        mewMonthsValue = 14;
    }else if(months == 3){
        mewMonthsValue = 3
    }else if(months == 4){
        newMonthsValue = 4
    }else if(months == 5){
        mewMonthsValue = 5
    }else if(months == 6){
        newMonthsValue = 6
    }else if(months == 7){
        mewMonthsValue = 7
    }else if(months == 8){
        newMonthsValue = 8
    }else if(months == 9){
        mewMonthsValue = 9
    }else if(months ==10){
        newMonthsValue = 10
    }else if(months == 11){
        mewMonthsValue = 11
    }else if(months == 12){
        newMonthsValue = 12
    }else{
        // alert("You are out of range")
    }

    var month = parseInt(mewMonthsValue);

    var year = document.getElementById('year').value;


    
    //Get years value from the calendar changing it to an array then slicing the first two values for centuary and the olast two for year.
    output = [];
    sumYears = year.toString();

    for(var i = 0, length = sumYears.length; i< length; i++){
        output.push(+sumYears.charAt(i));
    }

    // getting the first two values from the years input.
    var firstSecondValues = output[0].toString() + output[1].toString();
    var centuary = parseInt(firstSecondValues)

    // getting the third and fourth values from the years input.
    var thirdFourthValues = output[2].toString() + output[3].toString()
    var years = parseInt(thirdFourthValues)

    var totalMonths = (month + 1)

     specificDay = (day + Math.floor((13 * totalMonths )/5) + years + Math.floor(years/4) + Math.floor(centuary/4) - 2*centuary) % 7;
    
    daysOfWeek = specificDay - 1;

    // alert(daysOfWeek);

    numberDays = ["Sunday","Monday","Tuesday","Wednesday","thursday","friday","saturday",];

    maleRadio = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];

    femaleRadio = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

    if(isChecked = true) {
        //validationFormCheck2 is checked

        
        if(daysOfWeek == 0){
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[0];
        }else if(daysOfWeek == 1 || daysOfWeek == -6){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[1];
        }else if(daysOfWeek == 2 || daysOfWeek == -5){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[2];
        }else if(daysOfWeek == 3 || daysOfWeek == -4){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[3];
        }else if(daysOfWeek == 4 || daysOfWeek == -3){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[4];
        }else if(daysOfWeek == 5 || daysOfWeek == -2){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[5];
        }else if(daysOfWeek == 6 || daysOfWeek == -1){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + maleRadio[6];
        }
    
    }
    else{
        //validationFormCheck3 is checked
        
        if(daysOfWeek == 0){
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[0];
        }else if(daysOfWeek == 1 || daysOfWeek == -6){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[1];
        }else if(daysOfWeek == 2 || daysOfWeek == -5){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[2];
        }else if(daysOfWeek == 3 || daysOfWeek == -4){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[3];
        }else if(daysOfWeek == 4 || daysOfWeek == -3){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[4];
        }else if(daysOfWeek == 5 || daysOfWeek == -2){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[5];
        }else if(daysOfWeek == 6 || daysOfWeek == -1){        
            document.getElementById("paragraph").innerHTML = "Your Akan name is " + femaleRadio[6];
        }
        
    }

}







