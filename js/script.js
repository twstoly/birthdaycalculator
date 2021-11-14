

function calculateBirthday(){

    //Get months days from the calendar
    var days = document.getElementById("day").value;
    alert(days)

    //Get months value from the calendar
    var months = document.getElementById("month").value;

    if(months == 1){
        mewMonthsValue = 11
    }else if(months == 2){
        mewMonthsValue = 12;
    }else if(months == 3){
        mewMonthsValue = 1
    }else if(months == 4){
        newMonthsValue = 2
    }else if(months == 5){
        mewMonthsValue = 3
    }else if(months == 6){
        newMonthsValue = 4
    }else if(months == 7){
        mewMonthsValue = 5
    }else if(months == 8){
        newMonthsValue = 6
    }else if(months == 9){
        mewMonthsValue = 7
    }else if(months ==10){
        newMonthsValue = 8
    }else if(months == 11){
        mewMonthsValue = 9
    }else if(months == 12){
        newMonthsValue = 10
    }else{
        alert("You are out of range")
    }
}













