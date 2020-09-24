// setTimeout(()=> {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Yujin']
// const shortNames = names.filter((names) => {
//     return names.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// const data = geocode('Philadelphia', (data) => {
//     console.log(data)
// })


const add = ((a,b,callback) => {
    setTimeout(()=>{
        console.log('Two seconds are up')
        const sum = a+b

        callback(sum)
   
    }, 2000)
})

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

