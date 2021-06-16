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
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);

        for (let i = 0; i < itemsArr.length; i++) {
            console.log('local storage items length= ' + itemsArr.length);
            var status = '';
            if (itemsArr[i].status == 1) {
                status = 'class="done"';
            }
            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArr[i].item}</span> 
            <div><span>✅</span><span>🗑</span></div>
            </li>`;
        }

        itemsList.innerHTML = newItemHTML;

    } catch (error) {
        console.log(error);
    }
}

function saveItems(obj) {
    var string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string);
}

fetchItems();