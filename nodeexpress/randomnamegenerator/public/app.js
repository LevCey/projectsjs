
const loadRandomName = (resultDiv) => {
    fetch('http://localhost:3001/random-name')
        .then(response => response.json())
        .then(result => {
            resultDiv.innerHTML = `<h2>${result.first_name} ${result.last_name}</h2>`;
        });
};