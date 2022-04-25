
class Squares {
    constructor(rows, columns) {
        this.columns = columns;
        this.rows = rows;
        this.activeRow = null;
        this.activeColumn = null;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.prepend(container);

        const table = document.createElement('div');
        table.classList.add('table');
        container.append(table);

        const removeTop = document.createElement('div');
        removeTop.classList.add('removetop');
        removeTop.textContent = '-';
        container.prepend(removeTop); 

        const removeLeft = document.createElement('div');
        removeLeft.classList.add('removeleft');
        removeLeft.textContent = '-';
        container.prepend(removeLeft);

        const addColumn = document.createElement('div');
        addColumn.classList.add('addcolumn');
        addColumn.textContent = '+';
        container.append(addColumn);

        const addRow = document.createElement('div');
        addRow.classList.add('addrow');
        addRow.textContent = '+';
        container.append(addRow);


        for(let column = 0; column < this.columns; column++) {
            const createdColumn = document.createElement('div');
            createdColumn.classList.add('column');
            createdColumn.setAttribute('column',column )

            for(let row = 0; row < this.rows; row++) {
                const createdRow = document.createElement('div');
                createdRow.classList.add('cell');
                createdRow.setAttribute('row',row )
                createdColumn.append(createdRow);
            }
            table.append(createdColumn);
        }

        const addVertical = () => {
            const newColumn = table.lastElementChild.cloneNode(true);
            table.append(newColumn);
            // const newColumn = document.createElement('div');
            // newColumn.classList.add('column');
            // wrapp.append(newColumn);

            // for (let i = newColumn.children.length; i < wrapp.firstElementChild.children.length; i++) {
            //     const newRow = document.createElement('div');
            //     newRow.classList.add('cell');
            //     newColumn.append(newRow);
            // }
        }

        addColumn.addEventListener('click', addVertical);

        const addHorizontally = () => {
            document.querySelectorAll('.column').forEach(item => {
                const OneRow = document.createElement('div');
                OneRow.classList.add('cell');
                item.append(OneRow);
            })
        }

        addRow.addEventListener('click', addHorizontally);

        document.addEventListener('mouseover', (e) => {
            if (e.target === document.body) {
                removeLeft.style.display = 'none';
                removeTop.style.display = 'none';
            }
        })

        table.addEventListener('mousemove', (e) => {
            const target = e.target;
            // if(target.classList.contains('cell')) {
            //     this.activeColumn = target.parentElement.getAttribute('column')
            //    this.activeRow = target.getAttribute('row');

            //     target.parentElement.classList.add('test')
 
            // }

            if (target.classList.contains('cell') && table.children.length > 1 || table.firstElementChild.children.length > 1) {
                removeLeft.style.top = target.offsetTop + 'px';
                removeTop.style.left = target.offsetLeft + 'px';
                removeLeft.style.display = 'flex';
                removeTop.style.display = 'flex';
            }
        })

        removeTop.addEventListener('click', (e) => {
            for (let elem of document.querySelectorAll('.column')) {
                if (e.target.offsetLeft  === elem.firstElementChild.offsetLeft) {
                    elem.classList.add('delet');
                    removeTop.style.display = 'none';
                }
            }

            for (let elem of document.querySelectorAll('.column')) {
                if (elem.classList.contains('delet')) {
                    elem.remove();
                    removeTop.style.display = 'none';
                }
            }

            // document.querySelectorAll('.column').forEach(item => {
            //     if (e.target.offsetLeft  === item.firstElementChild.offsetLeft) {
            //         item.remove();
            //         removeTop.style.display = 'none';
            //     }
            // })
        })
        
        removeLeft.addEventListener('click', (e) => {
            document.querySelectorAll('.cell').forEach(item => {
                if (e.target.offsetTop  === item.offsetTop) {
                    item.classList.add('remove');
                }
                
            })
            document.querySelectorAll('.cell').forEach(elem => {
                if (elem.classList.contains('remove')) {
                    elem.remove();
                }
            })
            
            removeLeft.style.display = 'none';
        });

    }

}

new Squares(4, 4).render();










