// #### Create a day of the week translator.</br>
// Your program should read a variable called “dayNumber”, </br>
// and print (with console.log) the corresponding day of the week, where 0 is Sunday and 6 is Saturday.</br>
// For any other values, your program should print “Invalid day number”.</br>
// Test your program for all week days values.

let dayNumber = 1 ;
switch (dayNumber){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;    
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break; 
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day number')
        break;
}

