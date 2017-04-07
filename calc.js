var Memory = 0;
var Number1 = "";
var Number2 = "";
var NewNumber = "blank";
var opvalue = "";

function Display(displaynumber) {
document.calculator.answer.value = displaynumber;
}

function MemoryClear() {
Memory = 0;
document.calculator.mem.value = "";
}

function MemoryRecall(answer) {
if(NewNumber != "blank") {
Number2 += answer;
} else {
Number1 = answer;
}
NewNumber = "blank";
Display(answer);
}

function MemorySubtract(answer) {
Memory = Memory - eval(answer);
}

function Backspace(answer) {
answerlength = answer.length;
answer = answer.substring(0, answerlength - 1);
if (Number2 != "") {NegateButton
Number2 = answer.toString();
Display(Number2);
} else {
Number1 = answer.toString();
Display(Number1);
   }
}


function ClearCalc() {
Number1 = "";
Number2 = "";
NewNumber = "blank";
Display("");
}

function CheckNumber(answer) {
if(answer == ".") {
Number = document.calculator.answer.value;
if(Number.indexOf(".") != -1) {
answer = "";
   }
}
if(NewNumber == "yes") {
Number2 += answer;
Display(Number2);
}
else {
if(NewNumber == "blank") {
Number1 = answer;
Number2 = "";
NewNumber = "no";
}
else {
Number1 += answer;
}
Display(Number1);
   }
}
function AddButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) + parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '+';
Display(Number1);
}
function SubButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) - parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '-';
Display(Number1);
}
function MultButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) * parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '*';
Display(Number1);
}
function DivButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) / parseFloat(Number2);
if(parseFloat(Number2)==0){Display ('на 0 не делится');
return}
}
NewNumber = "yes";
opvalue = '/';
Display(Number1);          
}
function SqrtButton() {
Number1 = Math.sqrt(Number1);
NewNumber = "blank";
Display(Number1);
}

function PercentButton() {
if(NewNumber != "blank") {
Number2 *= .01;
NewNumber = "blank";
Display(Number2);
   }
}
function RecipButton() {
Number1 = 1/Number1;
NewNumber = "blank";
Display(Number1);
}
function NegateButton() {
Number1 = parseFloat(-Number1);
NewNumber = "no";
Display(Number1);
}
function EqualButton() {
if(opvalue == '+') AddButton(0);
if(opvalue == '-') SubButton(0);
if(opvalue == '*') MultButton(0);
if(opvalue == '/') DivButton(0);
Number2 = "";
opvalue = "";
}




///////Test


var result = 0;


var button = document.getElementById("button");
var questionsQuantity = document.getElementsByClassName("question").length;
var question1 = document.getElementsByName("link");
var question2 = document.getElementsByName("list");
var question3 = document.getElementsByName("browser");
var question4 = document.getElementsByName("table");
var question5 = document.getElementsByName("form");
button.onclick = function() {
    
    if (question1[0].checked) {
        result += 1;
    }
    if (question2[2].checked) {
        result += 1;
    }
    if (question3[3].checked) {
        result += 1;
    }
    if (question4[1].checked && question4[2].checked && !question4[0].checked && !question4[3].checked) {
        result += 1;
    }
    if (question5[0].checked && question5[1].checked && !question5[2].checked && !question5[3].checked) {
        result += 1;
    }
    alert("Правильных ответов: " + result + "\n" + 
        "Правильных ответов в процентном соотношении- " + (result/questionsQuantity*100+"%"));
    result = 0;
}







