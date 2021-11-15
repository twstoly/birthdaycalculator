
// function calculateBirthday(day, month, year){
//     var cc = Math.floor((14 - month) / 12);
//     var yy = year - cc;
//     var mm = month + 12 * cc - 2;
//     var dd = (day + y + Math.floor(yy / 4) - Math.floor(yy / 100) +
//         Math.floor(year / 400) + Math.floor((31 * mm) / 12)) % 7;
//         return dd;
// }
// var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function AddNths(day) {
//     if (day == 1 || day == 21 || day == 31) {
//         return 'st';
//     }
//     if (day == 2 || day == 22){
//          return 'nd';
//         }
//     if (day == 3 || day == 23) {
//         return 'rd';
//     }
//     else {
//         return 'th';
//     }
// }
// alert(calculateBirthday(9,12,1996))


    function calculateBirthday(day,month,year) {

        day = document.getElementById("day").value;
        month = document.getElementById("month").value;
        year = document.getElementById("year").value;

        var a = Math.floor((14 - month) / 12);
        var y = year - a;
        var m = month + 12 * a - 2;
        var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
        return d;
    }
    var daysofaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',       
     'Thursday', 'Friday', 'Saturday');
    function AddNths(day) {
        if (day == 1 || day == 21 || day == 31) return 'st';
        if (day == 2 || day == 22) return 'nd';
        if (day == 3 || day == 23) return 'rd';
        else {
            return 'th';
        }
    }
    
alert(calculateBirthday(day,month,year))


// function calculateBirthday(){

    //Get months days from the calendar
//     var days = document.getElementById("day").value;
//     alert(days)

//     //Get months value from the calendar
//     var months = document.getElementById("month").value;

//     if(months == 1){
//         mewMonthsValue = 11
//     }else if(months == 2){
//         mewMonthsValue = 12;
//     }else if(months == 3){
//         mewMonthsValue = 1
//     }else if(months == 4){
//         newMonthsValue = 2
//     }else if(months == 5){
//         mewMonthsValue = 3
//     }else if(months == 6){
//         newMonthsValue = 4
//     }else if(months == 7){
//         mewMonthsValue = 5
//     }else if(months == 8){
//         newMonthsValue = 6
//     }else if(months == 9){
//         mewMonthsValue = 7
//     }else if(months ==10){
//         newMonthsValue = 8
//     }else if(months == 11){
//         mewMonthsValue = 9
//     }else if(months == 12){
//         newMonthsValue = 10
//     }else{
//         alert("You are out of range")
//     }

//     var month = mewMonthsValue;
//     alert(month);

//     var year = document.getElementById('year').value;

//     // Checking for the validity of the items entered..
//     if(days <= 0 || days >31){
//         alert("You have entered an Invalid Day.")
//         document.getElementById("dateFeedback").innerHTML = "You have entered an Invalid Day";
//     }; 
//     if(months <= 0 || months > 12 ){
//         alert("You are out of range. there is no space for anothre month innovation or discovery?");
//         document.getElementById("monthFeedback").innerHTML = "You are out of range. there is no space for another month innovation or discovery?";
//     }; 

//     if(year <= 1000 || year > 2021 ){
//         alert("You are out of range.");
//         document.getElementById("yearFeedback").innerHTML = "..";
//     }
    
//     //Get years value from the calendar changing it to an array then slicing the first two values for centuary and the olast two for year.
//     output = [];
//     sumYears = year.toString();

//     for(var i = 0, length = sumYears.length; i< length; i++){
//         output.push(+sumYears.charAt(i));
//     }
//     // getting the first two values from the years input.
//     var firstSecondValues = output[0].toString() + output[1].toString();
//     var centuary = parseInt(firstSecondValues)

//     alert(firstSecondValues)


//     // getting the third and fourth values from the years input.
//     var thirdFourthValues = output[2].toString() + output[3].toString()
//     var year = parseInt(thirdFourthValues)
//     alert(thirdFourthValues)

//     var dayOfTheWeek = (days + [(13* month - 1)/5] + year + [year/4] + [centuary/4] - 2*centuary);

//     dayOfWeek =  ((((6 * year / 4)) + ((28 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
//     console.log(dayOfWeek);

//     alert(dayOfTheWeek);

// }
// document.getElementById("akanName").innerHTML = "Your akan name is: " ;





