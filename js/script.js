

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

    var month = mewMonthsValue;
    alert(month);

    var year = document.getElementById('year').value;

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
        document.getElementById("yearFeedback").innerHTML = "..";
    }
    
    //Get years value from the calendar changing it to an array then slicing the first two values for centuary and the olast two for year.
    output = [];
    sumYears = year.toString();

    for(var i = 0, length = sumYears.length; i< length; i++){
        output.push(+sumYears.charAt(i));
    }
    // getting the first two values from the years input.
    var firstSecondValues = output[0].toString() + output[1].toString();
    var centuary = parseInt(firstSecondValues)

    alert(firstSecondValues)


    // getting the third and fourth values from the years input.
    var thirdFourthValues = output[2].toString() + output[3].toString()
    var year = parseInt(thirdFourthValues)
    alert(thirdFourthValues)

    var dayOfTheWeek = (days + [(13* month - 1)/5] + year + [year/4] + [centuary/4] - 2*centuary) % 7;

    alert(dayOfTheWeek);



}
document.getElementById("akanName").innerHTML = "Your akan name is: " ;






































// function calculateBirthday(){
//     //Get months value from the calendar
//     var months = document.getElementById("month").value; 
//     alert(months);


//     //Get months days from the calendar
//     var days = document.getElementById("day").value;
//     alert(days)


//     //Get years value from the calendar changing it to an array then slicing the first two values for centuary and the olast two for year.
//     var years = document.getElementById("year").value;
//     output = [];
//     sumYears = years.toString();

//     for(var i = 0, length = sumYears.length; i< length; i++){
//         output.push(+sumYears.charAt(i));
//     }
//     // getting the first two values from the years input.
//     var fisrtSecondValues = output[0].toString() + output[1].toString();
//     var centuary = parseInt(fisrtSecondValues)

//     alert(fisrtSecondValues)


//     // getting the third and fourth values from the years input.
//     var thirdFourthValues = output[2].toString() + output[3].toString()
//     var year = parseInt(thirdFourthValues)
//     alert(thirdFourthValues)


//     var dayOfTheWeek = (((centuary/4)- 2*centuary-1) + ((5*year/4)) + ((26*(months+1)/10)) + days) % 7;
//     // var daySum = (((cc/4)- 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7;

//     var total = Math.round(dayOfTheWeek);

//     alert(total)

// }


document.getElementById("datee").innerHTML = 5 + 6;

// function calculateBirthday(){
//     var jan = document.getElementById('january').value;
//     var feb = document.getElementById('february').value;
//     var mar = document.getElementById('march').value;
//     var apr = document.getElementById('april').value;
//     var may = document.getElementById('may').value;
//     var jun = document.getElementById('june').value;
//     var jul = document.getElementById('july').value;
//     var aug = document.getElementById('august').value;
//     var sept = document.getElementById('september').value;
//     var oct = document.getElementById('october').value;
//     var nov = document.getElementById('november').value;
//     var dec = document.getElementById('december').value;

//     var month = document.getElementById('month').value;

//         var sum = parseInt(month);
//         alert(sum);

    // var daySum = (((cc/4)- 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7;

// }

    // function add() {
    //     var a = document.getElementById('a').value;
    //     var b = document.getElementById('b').value;
    
    //     var sum = parseInt(a) + parseInt(b);
    //     alert(sum);
    // }

    // function day(){
    //     var cc = document.getElementById('c').value;
    //     var yy = document.getElementById('y').value;
    //     var mm = document.getElementById('m').value;
    //     var dd = document.getElementById('d').value;
        

    //     var daysum = (((cc/4)- 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7;
    //     var total = Math.round(daysum);
    //     alert(total);
    // }
