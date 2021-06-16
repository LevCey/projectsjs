/**
 *  Consolda bu çalıştırıldı ve local storage kaydedildi => 
 *  localStorage.setItem('todo-items', '[{"item":"Record next video","status":0},{"item":"Record next video","status":1}]')
 */



const items = [{ "item": "Record next video", "status": 0 },
{ "item": "Record next video", "status": 1 }];

const itemsStr = JSON.stringify(items);

console.log(items);
console.log(itemsStr);

function fetchItems() {
    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = ''; // liste temizlendi.
    var newItemHTML = '';
    try {
        var itemsStorage = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(itemsStorage);

        for (let i = 0; i < itemsArr.length; i++) {
            console.log('local storage items length= ' + itemsArr.length);
            var status = '';

            if (itemsArr[i].status == 1) {
                status = 'class="done"';
            }

            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArr[i].item}</span> 
            <div><span class="itemComplete">✅</span><span class="itemDelete">🗑</span></div>
            </li>`;
        }

        itemsList.innerHTML = newItemHTML;

        var itemsListUL = document.querySelectorAll('ul li');
        for (let i = 0; index < itemsListUL.length; i++) {

            itemsListUL[i].querySelector('.itemComplete').addEventListener('click', function () {
                //
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemComplete(index);

            });
            itemsListUL[i].querySelector('.itemDelete').addEventListener('click', function () {
                //

                var index = this.parentNode.parentNode.dataset.itemindex;
                itemDelete(index);

            });
        }

    } catch (error) {
        console.log(error);
    }
}

function itemComplete(index) {
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);
    itemsArr[index].status = 1;
    saveItems(itemsArr);

    document.querySelector('ul.todo-items li[data-itemindex="' + index + '"]').className = 'done';
}

function itemDelete(index) {
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);

    itemsArr.splice(index, 1);
    saveItems(itemsArr);
    document.querySelector('ul.todo-items li[data-itemindex="' + index + '"]').remove;
}

function saveItems(obj) {
    var string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string);
}

fetchItems();