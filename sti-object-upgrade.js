/**Change the original employee arrays into instances of the Person object,
by using an object constructor*/
function Person(empName, empNumber, empSalary, empRating) {
  this.employee = empName;
  this.employeeNumber = empNumber;
  this.salary = empSalary;
  this.rating = empRating;
}

var atticus = new Person('Atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);

/**Keep the original "employee" array*/
var employees = [atticus, jem, boo, scout];

/**"Percentage" function takes in an instance of the Person object and
calculates the percentage of bonus based on several conditions*/
var percentage = function(empName) {
   var percent = 0;

   switch (empName.rating) {
     case 0:
     case 1:
     case 2: {
       percent = 0;
       break;
     }
     case 3: {
       percent = 4;
       break;
     }
     case 4: {
       percent = 6;
       break;
     }
      case 5: {
        percent = 10;
        break;
     }
   }

   if (empName.employeeNumber.length <= 4) {
     percent += 5;
   }
   if (parseInt(empName.salary) > 65000) {
     percent -= 1;
   }
   if (percent > 13) {
     percent = 13;
   }
   return percent;
 }

 /** "newArray" function initializes a new array variable, takes in an object,
 does some calculations, and populates the new array*/
 function newArray(origArray) {
   var empArray = [];
   var perc = percentage(origArray);
   empArray[0] = origArray.employee;
   empArray[1] = perc + "%";
   empArray[2] = Math.round(((perc/100) + 1) * origArray.salary);
   empArray[3] = Math.round(empArray[2] - origArray.salary);
   return empArray;
 };

 /** the for loop cycles through the employee array and calls the newArray
 function on each Person, then console.logs out the result.*/
 for (var i = 0; i < employees.length; i++) {
    console.log(newArray(employees[i]));
 }
