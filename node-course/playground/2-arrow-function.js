// const squre = function(x) {
//     return x*x
// }

// const squre = (x) => {
//     return x * x
// }

// const squre = (x) => x*x

// console.log(squre(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Yujin','Insoo'],
    printGuestList() {
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending '+this.name)
        })
    }
}

event.printGuestList()