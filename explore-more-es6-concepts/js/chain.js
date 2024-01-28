const user = {
    id:457,
    name: 'rojina',
    address: {
        street: {
            first: ' uttora',
            second: 'poribag',
            third: ' no dorai'
        },
        city:'dhaka'
    }
    
}
const user2 = {
    id: 99,
    name: 'poribag',
    address: {
        city: 'chitagong',
        country: 'bangladesh',
        
    }   
}
console.log(user2.address.street?.third)
const products = {
    count: 5000,
    data: [
        { id:1, name:'lenovo',price:444},
        { id:2, name:'lenovooooo',price:644}
    ]
}
console.log(products.data[1].price)