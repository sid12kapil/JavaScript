var a;//Global Variable 
var b;//Global Variable 

//Question No1.//

function oneclick(c)
{
	
	a=parseInt(document.getElementById("input1").value);
	b=parseInt(document.getElementById("input2").value);
	switch (c)
	{
		case 'add':add(a,b);
		break;
		case 'mul':mul(a,b);
		break;
		case 'div':div(a,b);
		break;
		case 'mod':mod(a,b);
		break;
		case 'sub':sub(a,b);
		break;
		default:alert("No Coupon");
	}

}


function add(a,b){
	
var addition = a + b; //loacal Variable
alert(addition);
}

function div(a,b){
var division = a / b;
alert(division);	
}

function sub(a,b){
var subtraction = a - b;
alert(subtraction);	
}

function mul(a,b){
var multiplication = a * b;
alert(multiplication);
}

function mod(a,b){
var modulu = a % b;
alert(modulu);
}

function Alert(){
alert("Bruce");
alert("Wayne");	
}

/*
var a=parseInt(document.getElementById("number1").value);//Global Variable 
var b=parseInt(document.getElementById("number2").value);//Global Variable 

//Question No1.//

function oneclick(){
var addition, multiplication, modulus;
addition=a+b;
multiplication=a*b;
modulus=a%b;
alert(addition);
alert(multiplication);
alert(modulus);
}


function add(){
var addition = a + b; //loacal Variable
alert(addition);
}

function divide(){
var division = a / b;
alert(division);	
}

function sub(){
var subtraction = a - b;
alert(subtraction);	
}

function multiply(){
var multiplication = a * b;
alert(multiplication);
}

function modulus(){
var modulu = a % b;
alert(modulu);
}

function individual()
add();
multiply();
modulu();


//function with returns
function addre(){
addition = a+b;
return addition;
}

function multiplyre(){
multiplication = a*b;
return multiplication;
}

function modulusre(){
modulu = a%b;
return modulu;
}


function seperreturn(){
var addition, multiplication, modulu;
addition = addre();
multiplication = multiplyre();
modulu = modulesre();
alert(addition);
alert(multiplication);
alert(modulu);	
}
*/