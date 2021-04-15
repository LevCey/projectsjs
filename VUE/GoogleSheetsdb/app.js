// https://youtu.be/iIhEyrYfqbA

// Set trigger for Google sheets scripts.
function createTrigger() {
    // Trigger once a day
    ScriptApp.newTrigger('getCovidDataAndUpdateSpreadSheet')
        .timeBased()
        .atHour(8)
        .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
        .create();
}

// =IMPORTXML("https://www.amazon.sa/بواجهات-اندرويد-كمقاومة-والغبار-تيك/dp/B08HMRY8NG/ref=sr_1_2?dchild=1&keywords=agptek+smart+watch&qid=1618457514&sr=8-2","//*[@id='priceblock_ourprice']")

function fetchData() {
    var wrkBk = SpreadsheetApp.getActiveSpreadsheet();
    var wrkSht = wrkBk.getSheetByName("Sheet1");

    for (var i = 2; i <= 6; i++) {
        var url = wrkSht.getRange('A' + i).getValue();
        var xpath = wrkSht.getRange('B' + i).getValue();
        var formula = "=IMPORTXML(" + String.fromCharCode(34) + url + String.fromCharCode(34) + "," + String.fromCharCode(34) + xpath + String.fromCharCode(34) + ")";
        wrkSht.getRange('C' + i).activate();
        wrkSht.getActiveRangeList().clear({ contentsOnly: true, skipFilteredRows: true });
        wrkSht.getRange('C' + i).setFormula(formula);
        Utilities.sleep(10000);
    }
}