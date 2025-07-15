function calculateAge() {
    let birthInput =
document.getElementById("birthDate").value;
    if (!birthInput){
        document.getElementById("result").innerText
        = "Please Enter Your Birthdate";
        return;
    }
 let birthDate= new Date(birthInput);
 let today = new Date();
 if( birthDate> today){
    document.getElementById("result").innerText
    ="Halar Put";
    return;
 }
 let age = today.getFullYear() - birthDate.getFullYear();
 let monthDiff = today.getMonth() - birthDate.getMonth();
 let dayDiff = today.getDate() - birthDate.getDate();

   if (dayDiff<0) {
    monthDiff--;
    let preMonth = new Date(today.getFullYear,today.getMonth,0 );
    dayDiff+= preMonth.getDate();
   }
 if (monthDiff<0 || (monthDiff===0 && dayDiff<0)){
    age--
 }

 if (monthDiff<0){
    years--;
    monthDiff+=12;
 };

 document.getElementById("result").innerText
 = `Your Age Is ${dayDiff} days, ${monthDiff} month ${age} years`;
};

