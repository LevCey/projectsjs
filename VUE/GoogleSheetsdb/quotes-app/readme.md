
Creating a Website with Vue.js backed by Google Sheets

https://albertauyeung.github.io//2020/04/26/vuejs-google-sheets.html


In order for the spreadsheet’s data to be avaible to other apps without the need to perform authentication, we need to first publish it. This can be done by choosing Publish to the Web from the File menu in Google Sheets.

To access the data stored in the spreadsheet, we can send a HTTP GET request to the following URL:

https://spreadsheets.google.com/feeds/list/{sheet_id}/1/public/values?alt=json