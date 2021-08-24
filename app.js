function reverseStr(str){
    var arrayItemSplit = str.split('');
    var reverse = arrayItemSplit.reverse();
    return reverse.join('');
}

function checkPalindrome (input ){
    var reverseInput = reverseStr(input);
    
    return reverseInput === input;
}

function convertDatetoString(date){

    var dateStr = { day: '', month: '', year: ''}

    if(date.day<10){
        dateStr.day = '0' + date.day;
    }
    if(date.month <10){
        dateStr.month = '0'+ date.month;
    }

    dateStr.year = date.year.toString();
    dateStr.day.toString();
    dateStr.month.toString();

    return dateStr;
}

function getAllDateFormats(date){
    /* 1. ddmmyyyy 2. mmddyyyy 3. yyyymmdd 4. ddmmyy 5.mmddyy 6. yymmdd */
    var dateStr = convertDatetoString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year ;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year ;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy =  dateStr.day + dateStr.month+ dateStr.year.slice(-2);
    var mmddyy =  dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}

var date1 = {
    day:9,
    month:9,
    year:2011,
};

