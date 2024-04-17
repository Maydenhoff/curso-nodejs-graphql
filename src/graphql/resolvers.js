const {getProduct, getProducts} = require("./product.resolvers")

const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age} years old`,
        getNumbers: (_,args) => args.numbers,
        product: getProduct,
        products: getProducts
    }
}

module.exports = resolvers