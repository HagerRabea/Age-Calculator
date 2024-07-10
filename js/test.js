var day = document.getElementById("day");
var month=document.getElementById("month");
var year=document.getElementById("year");
var button =document.getElementById("calculate");
var dayResult=document.getElementById("day-res");
var monthResult=document.getElementById("month-res");
var yearResult=document.getElementById("year-res");
var birthday=document.getElementById("birthday");



var date=new Date();
var birthdate='';
function ageCal(){
  var date_string=date.toString()
  if((date.getMonth()+1)>(month.value)){
    birthdate=(date.getFullYear())+'-'+(month.value)+'-'+(day.value);
  }else if((date.getMonth()+1)<(month.value)){
    birthdate=(date.getFullYear()+1)+'-'+(month.value)+'-'+(day.value);
  }else{
    if(date_string.substr(8,2)<day.value){
      birthdate=(date.getFullYear())+'-'+(month.value)+'-'+(day.value);
    }else{
      birthdate=(date.getFullYear()+1)+'-'+(month.value)+'-'+(day.value);
    }
  }
   
console.log(birthdate)
    dayResult.innerHTML=30-day.value;
    monthResult.innerHTML=12-month.value;
   
    console.log(date.toString());
    var age=(date.getFullYear())-(year.value);
    console.log("test1")
    console.log(age)
    if ((date.getMonth()+1) < month.value || (date.getMonth()+1 == month.value && day.value>Number(date_string.substr(8,2)) )) {
        age--;
        monthResult.innerHTML=(12-month.value)+(date.getMonth());
        // console.log(date_string.slice(8,4));
        console.log(date_string.substr(8,2))
        if(day.value>Number(date_string.substr(8,2))){
        dayResult.innerHTML=(30-(day.value))+Number(date_string.substr(8,2))
        }else{
          dayResult.innerHTML=Number(date_string.substr(8,2))-day.value;
        }
      }
      else{
        monthResult.innerHTML=((date.getMonth())+1)-month.value;
        if(day.value>Number(date_string.substr(8,2))){
          dayResult.innerHTML=(30-(day.value))+Number(date_string.substr(8,2))
          }else{
            dayResult.innerHTML=Number(date_string.substr(8,2))-day.value;
          }
      }
    yearResult.innerHTML=age;
    function getDayName(date = new Date(), locale = 'en-US') {
      return date.toLocaleDateString(locale, {weekday: 'long'});
    }
    var dayName=getDayName(new Date(birthdate));
    
    // ✅ Get name of current day
    // console.log(getDayName(new Date(birthdate)));
    birthday.innerHTML=dayName;
}

