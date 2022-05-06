
class Squares {
    constructor(rows, columns) {
        this.columns = columns;
        this.rows = rows;
        this.activeRow = null;
        this.activeColumn = null;
        this.container = document.createElement('div');
        this.table = document.createElement('div');
        this.removeTop = document.createElement('div');
        this.removeLeft = document.createElement('div');
        this.addColumn = document.createElement('div');
        this.addRow = document.createElement('div');
    }

    render() {
        this.container.classList.add('container');
        document.body.prepend(this.container);

        this.table.classList.add('table');
        this.container.append(this.table);

        this.removeTop.classList.add('removetop', 'remove');
        this.removeTop.textContent = '-';
        this.container.prepend(this.removeTop); 

        this.removeLeft.classList.add('removeleft', 'remove');
        this.removeLeft.textContent = '-';
        this.container.prepend(this.removeLeft);

        this.addColumn.classList.add('addcolumn');
        this.addColumn.textContent = '+';
        this.container.append(this.addColumn);

        this.addRow.classList.add('addrow');
        this.addRow.textContent = '+';
        this.container.append(this.addRow);


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
            this.table.append(createdColumn);
        }

        return this;
    }

    addListeners() {
        const addVertical = () => {
            const newColumn = this.table.lastElementChild.cloneNode(true);
            this.table.append(newColumn);
        }

        this.addColumn.addEventListener('click', addVertical);

        const addHorizontally = () => {
            document.querySelectorAll('.column').forEach(item => {
                const OneRow = document.createElement('div');
                OneRow.classList.add('cell');
                item.append(OneRow);
            })
        }

        this.addRow.addEventListener('click', addHorizontally);

        this.container.addEventListener('mouseleave', () => {
            this.removeLeft.style.display = 'none';
            this.removeTop.style.display = 'none';
        })

        this.table.addEventListener('mousemove', (e) => {
            // const target = e.target;
            // if(target.classList.contains('cell')) {
            //     this.activeColumn = target.parentElement.getAttribute('column')
            //    this.activeRow = target.getAttribute('row');

            //     target.parentElement.classList.add('test')
            // }

            if (target.classList.contains('cell')) {
                this.removeLeft.style.top = target.offsetTop + 'px';
                this.removeTop.style.left = target.offsetLeft + 'px';
                this. table.children.length > 1 ? this.removeTop.style.display = 'flex' : this.removeTop.style.display = 'none';
                this.table.firstElementChild.children.length > 1 ? this.removeLeft.style.display = 'flex' : this.removeLeft.style.display = 'none'
            }
        })

        this.removeTop.addEventListener('click', (e) => {
            const columns = document.querySelectorAll('.column');
            for (let i = 0; i < columns.length; i++) {
                if (columns[i].offsetLeft === e.target.offsetLeft) {
                    columns[i].remove();
                    this.removeTop.style.display = 'none';
                    return;
                }
            }
        })
        
        this.removeLeft.addEventListener('click', (e) => {
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
            
            this.removeLeft.style.display = 'none';
        });
        return this;
    }

}

new Squares(4, 4).render().addListeners();










