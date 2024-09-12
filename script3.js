                            //   Question 1
                            
document.write("<center><h1> quetion 1 </h1></center><br>");

var a = 10;

document.write("Result"+ "<br>");
document.write("The Value of a is "+ a + "<hr>");


document.write("The value of ++a is: "+ ++a + "<br>");
document.write("Now the value of a is: "+ a + "<br> <br> <br>");

document.write("The value of a++ is: "+ a++ + "<br>");
document.write("Now the value of a is: "+ a + "<br> <br> <br>");

document.write("The value of --a is: "+ --a + "<br>");
document.write("Now the value of a is: "+ a + "<br> <br> <br>");

document.write("The value of a-- is: "+ a-- + "<br>");
document.write("Now the value of a is: "+ a + "<br> <br> <br>" + "<hr>");

                                 //  Question 2

document.write("<center><h1> quetion 2 </h1></center><br>");
                            
var a = 2, b = 1;

document.write("a is " + a + "<br>");
document.write("b is " + b  + "<br>");
document.write("then <br> --a = "+ --a + "<br> --b = "+ --b + "<br> ++b = " + ++b + "<br> b-- = "+ b-- + "<br>");
document.write("Then <br> --a - --b + ++b + b-- <br>")
var result =  --a - --b + ++b + b--;
document.write("The result is = "+ result + "<hr>");

                                 //  Question 3
                                
// document.write("<center><h1> quetion 3 </h1></center><br>");

var input = prompt("Welcome! Type Your Name" + "<hr>")

                                 //  Question 4

                                             // Table
var input = prompt("Enter Number");

document.write("<h1> <center>"+ "Table of " + input + "</center> </h1> <br> <br>");

document.write(input + " x 1 = " + input*1 + "<br>" + 
               input + " x 2 = " + input*2 + "<br>" + 
               input + " x 3 = " + input*3 + "<br>" + 
               input + " x 4 = " + input*4 + "<br>" + 
               input + " x 5 = " + input*5 + "<br>" + 
               input + " x 6 = " + input*6 + "<br>" + 
               input + " x 7 = " + input*7 + "<br>" + 
               input + " x 8 = " + input*8 + "<br>" + 
               input + " x 9 = " + input*9 + "<br>" + 
               input + " x 10 = " + input*10 + "<br>" 
               + "<hr>"
)

