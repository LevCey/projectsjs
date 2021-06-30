
window.firstOpen = false;
function fetchNotes() {
    document.querySelector('.pages-holder').innerHTML = '';
    chrome.runtime.sendMessage({ command: "fetchNotes", data: { notes: '' } }, (response) => {

        var notes = response.data;
        var nav = '<ul>';
        window.notes = [];

        for (const noteId in notes) {
            nav += `<li data-noteId=" ` + noteId`">` + notes[noteId].icon + ` ` + notes[noteId].title + ` </li > `;
            window.notes[noteId] = notes[noteId];
        }
        nav += '</ul>';
        document.querySelector('.pages-holder').innerHTML = nav;
    });

    listenForClicks();
}

function clearNotes() {

}

function changePage(noteId) {

}

function savePage(id, title, icon, body) {

}

function listenForClicks() {
    var lis = document.querySelectorAll('.pages-holder ul li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            changePage(this.dataset.noteId);
        });
    }
    if (window.firstOpen == false) {
        window.firstOpen = true;
    }

    try {

    } catch (e) {

    }

}


window.addEventListener('DOMContentLoaded', () => {
    var button = document.querySelector('.holder .icon');

    button.addEventListener('click', () => {

    });
});

