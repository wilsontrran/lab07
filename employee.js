var employees = [{}];
var i = 0;
function submit() {

employees.push({});

employees[i].fname = document.getElementById("fname").value;
  
employees[i].lname = document.getElementById("lname").value;
  
employees[i].department = document.getElementById("department").value;
 
employees[i].employeeId = Math.floor(Math.random()*90000000) + 10000000;

  
var added = "Employee Added";
var txt = added.fontsize(5);
var guy = i + 1;
var foostring = txt.bold(5) + "<br/><br/>"+ "Name: " + employees[i].lname + ", "+ employees[i].fname +  "<br />" + "Department: " + employees[i].department + "<br/>" + "Employee ID: " + employees[i].employeeId + "<br/>" + "Total Employees: " + guy;

foostring.toString();
document.getElementById("foo").innerHTML = foostring;
  
//console.log(employees[i]);
console.log(employees);

i++;
return false;
  
}

  


function init() {
	'use strict';
    console.log("init()");
	document.getElementById('theForm').onsubmit = submit;
} // End of init() function.

window.onload = init;