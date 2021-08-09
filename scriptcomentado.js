const Modal = {
    open(){
        document
            .querySelector('.modal')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.modal')
            .classList
            .remove('active')
    }
}

const transactions = [
{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
},
{    id: 2,
    description: 'Criação de Website',
    amount: 500000,
    date: '23/01/2021',
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
}
]

const Transaction = {
    incomes() {//somar as entradas

    },
    expenses() {//somar as saídas

    },
    total() {//entradas - saídas

    }

} 

//Os dados são trabalhados no JS e depois mandados para o
//HTML e só então haverá interação com o usuário final.

const DOM = {
    addTransaction(transaction, index) {
        console.log('testandoo')
        const tr = documet.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()

    },
    innerHTMLTransaction(transaction) {

        const html = `        
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>                   
        
        `

        return html
    }
}

DOM.addTransaction(transactions[0])