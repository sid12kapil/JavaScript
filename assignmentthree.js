//Question 1
function age1(){
var age = prompt("Enter Age");
var age = parseInt(age);
if (age<=14){
	alert("Not Allowed");}
	else if (age>14 && age<65){
		alert("Regular Price");}
		else if (age==50){
			alert("Special Discount");
		}
}

//Question 2
function age2(){
var age = prompt("Enter Age");
var age = parseInt(age);
if (age==14){
	alert("Coupon 1");
}else if (age==21){
		alert("Coupon 2");}
		else if (age==30){
			alert("Coupon 3");}
			else if (age==50){
				alert("Coupon 4")
			}
			else{
	alert("No Coupon");
}
}

//Question 3
function day1(){
var day = prompt("Enter Day");

if (day=="monday"){
	alert("Monday's We Serve Aloo Puri");
}
else if (day=="tuesday"){
	alert("Tuesday's We Serve Aloo Paratha");
}
else if (day=="wednesday"){
	alert("Wednesday's We Serve Dal Bati");
}
else if (day=="thursday"){
	alert("Thursday's We Serve Missal Pav");
}
else if (day=="friday"){
	alert("friday's We Serve Chole Bhature");
}
else if (day=="saturday"){
	alert("Saturday's We Serve Pav Bhaji");
}
else if (day=="sunday"){
	alert("Sunday's We Serve Dosa");
}
}

//Question 4
function yr(){
var year = prompt("Enter Year");
var year = parseInt(year);
if (year==2005){
	alert("Movie 'Crash' Won Oscar This Year");
}
else if (year==2006){
	alert("Movie 'The Departed' Won Oscar This Year");
}
else if (year==2007){
	alert("Movie 'No Country For Old Men' Won Oscar This Year");
}
else if (year==2008){
	alert("Movie 'Slumdog Millionaire' Won Oscar This Year");
}
else if (year==2009){
	alert("Movie 'The Hurt Locker' Won Oscar This Year");
}
else if (year==2010){
	alert("Movie 'The King's Speech' Won Oscar This Year");
}
else if (year==2011){
	alert("Movie 'The Artist' Won Oscar This Year");
}
else if (year==2012){
	alert("Movie 'Argo' Won Oscar This Year");
}
else if (year==2013){
	alert("Movie '12 Years a Slave' Won Oscar This Year");
}
else{
	alert("Please Enter Year Between 2005-2013");
}
}


//Question 5
function grd(){
var grade = prompt("Enter Grades");
if (grade=="A+"){
	alert("Excelent");
}
else if (grade=="A-"){
	alert("Very Very Good");
}
else if (grade=="A"){
	alert("Very Good");
}
else if (grade=="B+"){
	alert("Good");
}
else if (grade=="B"){
	alert("Fair");
}
else if (grade=="C+"){
	alert("Average");
}
else if (grade=="C"){
	alert("Pass");
}
else if (grade=="D"){
	alert("Pappu Fail Ho Gaya");
}		
}	
	