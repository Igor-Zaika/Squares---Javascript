
class Squares {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }

    render() {
        const square = document.createElement('div');
        square.classList.add('square');
        document.body.prepend(square);

        const wrapp = document.createElement('div');
        wrapp.classList.add('wrapp');
        square.append(wrapp);

        const minusTop = document.createElement('div');
        minusTop.classList.add('removetop');
        minusTop.textContent = '-';
        square.prepend(minusTop); 

        const minusLeft = document.createElement('div');
        minusLeft.classList.add('removeleft');
        minusLeft.textContent = '-';
        square.prepend(minusLeft);

        const plusColumn = document.createElement('div');
        plusColumn.classList.add('addcolumn');
        plusColumn.textContent = '+';
        square.append(plusColumn);

        const plusRow = document.createElement('div');
        plusRow.classList.add('addrow');
        plusRow.textContent = '+';
        square.append(plusRow);


        for(let row = 0; row < this.rows; row++) {
            const createdRow = document.createElement('div');
            createdRow.classList.add('row');
            createdRow.setAttribute('row',row )

            for(let column = 0; column < this.columns; column++) {
                const createdColumn = document.createElement('div');
                createdColumn.classList.add('cell');
                createdColumn.setAttribute('column',column )

                createdRow.append(createdColumn);
            }
            wrapp.append(createdRow);
        }

        const addVertical = () => {
            const oneColumn = document.createElement('div');
            oneColumn.classList.add('row');
            wrapp.append(oneColumn);

            for (let i = oneColumn.children.length; i < wrapp.firstElementChild.children.length; i++) {
                const newCell = document.createElement('div');
                newCell.classList.add('cell');
                oneColumn.append(newCell);
            }
        }

        plusColumn.addEventListener('click', addVertical);

        const addHorizontally = () => {
            document.querySelectorAll('.row').forEach(item => {
                const OneRow = document.createElement('div');
                OneRow.classList.add('cell');
                item.append(OneRow);
            })
        }

        plusRow.addEventListener('click', addHorizontally);

        document.addEventListener('mouseover', (e) => {
            if (e.target === document.body) {
                minusLeft.style.display = 'none';
                minusTop.style.display = 'none';
            }
            
        })

        wrapp.addEventListener('mousemove', (e) => {
            if (e.target.classList.contains('cell') && wrapp.children.length > 1 && wrapp.firstElementChild.children.length > 1) {
                minusLeft.style.top = e.target.offsetTop + 'px';
                minusTop.style.left = e.target.offsetLeft + 'px';
                minusLeft.style.display = 'flex';
                minusTop.style.display = 'flex';
            }
        })

        minusTop.addEventListener('click', (e) => {
            document.querySelectorAll('.row').forEach(item => {
                if (e.target && e.target.offsetLeft  === item.firstElementChild.offsetLeft) {
                    console.log(item.firstElementChild.offsetLeft)
                    // console.log(e.target.offsetLeft)
                    
                    item.remove();
                    
                    minusTop.style.display = 'none';
                }
            })
        })
        
        minusLeft.addEventListener('click', (e) => {
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
            
            minusLeft.style.display = 'none';
        });

    }

}

new Squares(4, 4).render();










