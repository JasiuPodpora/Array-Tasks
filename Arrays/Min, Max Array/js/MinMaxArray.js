var numbersList = [9, 5, 17, 32, 61];
var min = Math.min(9, 5, 17, 32, 61);
var max = Math.max(9, 5, 17, 32, 61);

for (x = 0; x <numbersList.length; x++) {

    document.write("The position " + (x+1) + " has the number " + numbersList[x] + "<br>");
}

document.write("The minimum number in the array is " + minimum + "<br>");
document.write("The maximum number in the array is " + maximum + "<br>");