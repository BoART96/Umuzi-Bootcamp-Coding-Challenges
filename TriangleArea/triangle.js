// *******************************
function triangleArea() {
          var frm = document.getElementById('tri');
    var A = frm.elements['A'].value;
    var B = frm.elements['B'].value;
    var C = frm.elements['C'].value;
    var output = document.getElementById('output');
    var area;
    /*if(isNaN(base) || (isNaN(height) {
    output.innerHTML = "You did not enter two numbers.";
    } else {*/
    area = 0.5*A+B+C;
    output.innerHTML = "Area =" + area;
    // }
}