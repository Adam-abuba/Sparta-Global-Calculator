
    // get the user inputs
var i= 0;
while (i < 10) {
var tool = prompt("Which Calculator which you like to use? 'Basic', 'Advanced' or 'BMI'")
    if (tool == "Basic") {


      var value1 = prompt('enter first value');
      var value2 = prompt('enter the second value');
      var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mod)ulus') || "a";

switch (choice) {
  case "a":
    console.log(parseFloat(value1) + parseFloat(value2));
    break;
  case "s":
    console.log(parseFloat(value1) - parseFloat(value2));
    break;
  case "m":
    console.log(parseFloat(value1) * parseFloat(value2));
    break;
    case "d":
      console.log(parseFloat(value1)/parseFloat(value2));
      break;
  default:
  console.log(parseInt(value1)%parseInt(value2));
}
var exit = prompt("Would you like to exit the calculator: 'Yes' or 'No'")
if (exit == 'Yes') {
  break;
}else {
  continue;
}
}
else if (tool == "Advanced") {
// Advanced maths
  var choice = prompt('Choose your action: "Power" or "Sqrt"')

    if (choice == "Power") {
        var value1 = prompt('enter first value to be raised');
        var value2 = prompt('enter the index of the first value');
        console.log(Math.pow(parseInt(value1), parseInt(value2)));

        var exit = prompt("Would you like to exit the calculator: 'Yes' or 'No'")
        if (exit == 'Yes') {
        break;
        }else {
          continue;
        }

    }



else {
  var value1 = prompt('enter value to be square rooted');

    console.log(Math.sqrt(parseInt(value1)));

    var exit = prompt("Would you like to exit the calculator: 'Yes' or 'No'")
    if (exit == 'Yes') {
    break;
    }else {
      continue;
      }

}

}



else {
  var system = prompt("Which measurement system would you like 'Imperial' or 'Metric' ")
  if (system == 'Metric') {
    //Calculate your BMI in Metric system.
    var Weight_In_Kg = prompt("Enter your weight in Kilograms");
    var Hieght_In_M = prompt("Enter your hieght in meters");

    console.log((parseFloat(Weight_In_Kg))/(Math.pow(parseFloat(Hieght_In_M), 2)));

    var exit = prompt("Would you like to exit the calculator: 'Yes' or 'No'")
    if (exit == 'Yes') {
    break;
    }else {
      continue;
      }

  }
else {
  // Calculate your BMI in imperial system.
  var Weight_In_lbs = prompt("Enter your weight in pounds");
  var Hieght_In_in = prompt("Enter your hieght in inches");

  console.log(((parseFloat(Weight_In_lbs))/(Math.pow(parseFloat(Hieght_In_in), 2)))*703);

  var exit = prompt("Would you like to exit the calculator: 'Yes' or 'No'")
  if (exit == 'Yes') {
  break;
  }else {
    continue;
        }

    }

    }
  }
