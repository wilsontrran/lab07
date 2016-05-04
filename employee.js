var employees = [{}];
var i = 0;
function submit() {

employees.push({});

employees[i].fname = document.getElementById("fname").value;
  
employees[i].lname = document.getElementById("lname").value;
  
employees[i].department = document.getElementById("department").value;

var d = new Date();
var days = ["Sun","Mon","Tues","Wed","Thurs","Frid","Sat"];
var dayofweek= days[d.getDay()];
var year = d.getFullYear();
var listmonths = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var month = listmonths[d.getMonth()]; 
var date = d.getDate();
var xdate = dayofweek + " " + month + " " + date + " " + year;
 
employees[i].hiredate = xdate;
employees[i].employeeId = Math.floor(Math.random()*90000000) + 10000000;

  
var added = "Employee Added";
var txt = added.fontsize(5);
var guy = i + 1;
var foostring = txt.bold(5) + "<br/><br/>"+ "Name: " + employees[i].lname + ", "+ employees[i].fname +  "<br />" + "Department: " + employees[i].department + "<br/>" + "Hire Date: " + xdate + "<br/>" + "Employee ID: " + employees[i].employeeId + "<br/>" + "Total Employees: " + guy;

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
