
var firebaseConfig = {
  apiKey: "AIzaSyC7K30FUJm6VxBpCFieJRnXJibHNcrjYzU",
  authDomain: "new-tab-notes-20b54.firebaseapp.com",
  projectId: "new-tab-notes-20b54",
  storageBucket: "new-tab-notes-20b54.appspot.com",
  messagingSenderId: "518935409152",
  appId: "1:518935409152:web:7185558637ef8d6cf1dee5"
};

firebase.initializeApp(firebaseConfig);

console.log(firebase);

chrome.runtime.onMessage.addListener((msg, sender, response) => {

  if (msg.command == 'pcreateNote..') {

  }


});