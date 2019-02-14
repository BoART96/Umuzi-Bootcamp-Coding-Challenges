function numberHourMin(x) {

var hour = parseInt(x/3600);
var min = parseInt(((x/3600)-hour)*60);
return hour + ":" + min; 
}

console.log(numberHourMin(12400)); //3:26
console.log(numberHourMin(3599)); //0:59 
console.log(numberHourMin(4200)); //1:10
console.log(numberHourMin(71)); //0:1
console.log(numberHourMin(450)); //0:7
console.log(numberHourMin(1441)); //0:24