const square = (n) => {
    return n * n
}

const squared = (number) => number * number

const event = {
    name: 'Birthday feast',
    guestList: ['Aba', 'Preach', 'Pushkin'],
    printGuestsList() {
        console.log(`Guest List for ${this.name}`)
        this.guestList.forEach(guest => {
            console.log(`${guest} is attending ${this.name}`)
        });
    }
}

event.printGuestsList()