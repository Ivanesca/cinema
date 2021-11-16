function disassemble() {
    var words = document.querySelector('.words').value.split('-').sort();
    let disassembledList = document.querySelector('.disassembledList');

    clearFields(disassembledList);
    clearFields(document.querySelector('.result_list'));

    let numbersCounter = 1;
    let wordsCounter = 1;

    let map = new Map();

    words.forEach(element => {
        if (isNaN(element)) {
            map.set('a' + wordsCounter, element);
            wordsCounter += 1;
        } else {
            map.set('n' + numbersCounter, element)
            numbersCounter += 1;
        }
    });

    let sortedMap = new Map([...map].sort());

    sortedMap.forEach((value, key) => {
        let li = document.createElement("li");
        li.innerHTML = key + ' ' + value;
        li.addEventListener("click", updateOutput);
        disassembledList.appendChild(li)
    })
}

function updateOutput() {
    let resultList = document.querySelector('.result_list');
    let li = document.createElement("li");
    li.innerHTML = this.innerHTML.split(' ')[1];
    resultList.appendChild(li);
}

function clearFields(root) {
    while( root.firstChild ){
        root.removeChild( root.firstChild );
    }
}