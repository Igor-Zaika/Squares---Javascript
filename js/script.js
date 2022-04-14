const plusColumn = document.querySelector('.addcolumn');
const plusRow = document.querySelector('.addrow');
const column = document.querySelector('.column');
const container = document.querySelector('.container');
const removeLeft = document.querySelector('.removeleft');
const removeTop = document.querySelector('.removetop');

const addVertical = () => {
    const addColumn = document.createElement('div');
    addColumn.classList.add('column');
    container.append(addColumn);

    for (let i = addColumn.children.length; i < column.children.length; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        addColumn.append(newCell);
    }
}

const addHorizontally = () => {
    document.querySelectorAll('.column').forEach(item => {
        const addRow = document.createElement('div');
        addRow.classList.add('cell');
        item.append(addRow);
    })
}

plusColumn.addEventListener('click', addVertical);
plusRow.addEventListener('click', addHorizontally);


container.addEventListener('mousemove', (e) => {
    if (e.target.classList.contains('cell') && container.children.length > 1 && container.firstElementChild.children.length > 1) {
        removeLeft.style.top = e.target.offsetTop + 82 + 'px';
        removeTop.style.left = e.target.offsetLeft + 82 + 'px';
        removeLeft.style.display = 'flex';
        removeTop.style.display = 'flex';
    }
})

document.addEventListener('mouseover', (e) => {
    if (e.target === document.body) {
        removeLeft.style.display = 'none';
        removeTop.style.display = 'none';
    }
    
})


removeTop.addEventListener('click', (e) => {
    document.querySelectorAll('.column').forEach(item => {
        if (e.target.offsetLeft - 82  === item.firstElementChild.offsetLeft) {
            item.remove();
            removeTop.style.display = 'none';
        }
    })
})

const removeRow = () => {
    document.querySelectorAll('.column').forEach(item => {
        item.firstElementChild.remove();
        removeLeft.style.display = 'none';
    })
}

removeLeft.addEventListener('click', removeRow);

// removeLeft.addEventListener('click', (e) => {
//     document.querySelectorAll('.cell').forEach(item => {
//         if (e.target.offsetTop - 82  === item.offsetTop) {
//             // item.remove();
//             removeLeft.style.display = 'none';
//         }
//     })
// });
