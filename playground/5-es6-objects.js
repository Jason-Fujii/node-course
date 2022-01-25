//Object property shorthand

const name = 'Jason'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'Los Angeles'
}

console.log(user)

// Object Destructuring
//to extract object properties and their values into other variables

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)