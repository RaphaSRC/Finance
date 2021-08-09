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
        id:1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Criação de Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        console.log(tr.innerHTML)
    },
    innerHTMLTransaction(transaction) {

        const html = `        
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="./assets/minus.svg" alt="Remover Transação"></td>                   
    
    `
        return html
    }
}

DOM.addTransaction(transactions[0])