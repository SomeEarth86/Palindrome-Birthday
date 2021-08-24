function reverseStr(str) {
    var arrayItemSplit = str.split('');
    var reverse = arrayItemSplit.reverse();
    return reverse.join('');
}

function checkPalindrome(input) {
    var reverseInput = reverseStr(input);

    return reverseInput === input;
}

function convertDatetoString(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    }

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day;
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else 
    {
        dateStr.month = date.month
    }
    
    dateStr.year = date.year.toString();
    dateStr.day= dateStr.day.toString();
    dateStr.month= dateStr.month.toString();

    return dateStr;
}

function getAllDateFormats(date) {
    /* 1. ddmmyyyy 2. mmddyyyy 3. yyyymmdd 4. ddmmyy 5.mmddyy 6. yymmdd */
    var dateStr = convertDatetoString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;


    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}

function checkPalindromAllFormat(date) {

    var dateStrArr = getAllDateFormats(date);

    flag = false;
    for (i = 0; i < dateStrArr.length; ++i) {
        if (checkPalindrome(dateStrArr[i])) {
            flag = true;
            break;
        }
    }

    return flag;
}

function isLeapYear (year){

    if(year % 400 === 0) return true;
    if(year % 100 === 0) return false;
    if(year % 4 === 0 ) return true;

    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 2){
        if (isLeapYear(year)){
            if(day>29){
                day = 1;
                month++;
            }
        }
        else{
            if( day > 28){
                day = 1;
                month++;
            }
        }
    } //feb month logic 
    else{ // for the rest of months
        if(day > daysInMonth[month-1]){
            day = 1;
            month++;
        }
     }

     if(month > 12) {
         month = 1;
         year++;
     }

     return{
         day:day,
         month: month,
         year: year
     };
}

function getNextPalindromeDate (date){
    var counter = 0;
    var nextDate = getNextDate(date);

    while(1){
        counter++;
        var isPalindrome = checkPalindromAllFormat(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [counter , nextDate];
}

var birthdayInp = document.querySelector('#birthday-inp');
var showBtn = document.querySelector('#show-btn');
var resultDisplay = document.querySelector('#result');

showBtn.addEventListener('click', checkBday);

function checkBday(){

    if( birthdayInp.value){
        var bdayStr =  birthdayInp.value;
        var dateArr =  bdayStr.split('-');

        var numberDate = {
            day: Number(dateArr[2]),
            month: Number(dateArr[1]),
            year: Number(dateArr[0]),
        }

        if(checkPalindromAllFormat(numberDate)){
            resultDisplay.innerText = " Yay !!!! Your BirthDay is Palindrome";

        }
        else{
            var [counter, nextDate] = getNextPalindromeDate(numberDate);
            console.log(counter,nextDate);
            resultDisplay.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${counter} days.`;
        }

    }
    // console.log(birthdayInp.value);
}

