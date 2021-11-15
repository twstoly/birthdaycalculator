

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
