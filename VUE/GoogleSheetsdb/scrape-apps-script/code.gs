/**
 * Google sheets Columns : date_time	number_of_cases  	number_of_deaths
 */

function createTrigger() {
    // Trigger once a day
    ScriptApp.newTrigger('getCovidDataAndUpdateSpreadSheet')
        .timeBased()
        .atHour(8)
        .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
        .create();
}

function getCovidDataAndUpdateSpreadSheet() {
    var url = "http://publichealth.lacounty.gov/media/Coronavirus/locations.htm"

    //fetch site content
    var websiteContent = UrlFetchApp.fetch(url).getContentText();
    var fetchTime = Utilities.formatDate(new Date(), 'Etc/GMT', "yyyy-MM-dd HH:mm:ssZ"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
    Logger.log(fetchTime);

    //extract data
    var laCasesRegExp = new RegExp(/(Laboratory Confirmed Cases(\s+))([td<>\/ class=\"text\-white\"]+)(?<number>[0-9]+)/m);
    var laDeathsRegExp = new RegExp(/(Deaths)([tdh<>\/]+)([0-9]+)/m);
    var laCasesMatchText = laCasesRegExp.exec(websiteContent);
    Logger.log(laCasesMatchText);
    var laDeathsMatchText = laDeathsRegExp.exec(websiteContent);

    //add data to the spreadsheet
    var la_row_data = {
        date_time: fetchTime,
        number_of_cases: laCasesMatchText[4],
        number_of_deaths: laDeathsMatchText[3]
    };

    insertRowInTracker(la_row_data)
}

function insertRowInTracker(rowData) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var rowValues = [];
    var columnHeaders = sheet.getDataRange().offset(0, 0, 1).getValues()[0];
    Logger.log("writing to: ", sheet);
    Logger.log("writing: ", rowData);
    columnHeaders.forEach((header) => {
        rowValues.push(rowData[header]);
    });
    sheet.appendRow(rowValues);
}

