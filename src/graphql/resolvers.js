const {getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductByCategory} = require("./product.resolvers")
const {getCategory} = require("./category.resolvers")
const {login} = require("./auth.resolvers")
const {addCategory} = require("./category.resolvers")
const {RegularExpression} = require("graphql-scalars")

const CategoryNameType = new RegularExpression("CategoryNameType", /^[a-zA-Z0-9]{3,8}$/)

const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getPerson: (_, args) => `hello, my name is ${args.name}, I am ${args.age} years old`,
        getNumbers: (_,args) => args.numbers,
        product: getProduct,
        products: getProducts,
        category: getCategory
    },
    Mutation: {
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
        
    },
    CategoryNameType ,
    Category: {
        products: getProductByCategory
    
    }
}

module.exports = resolvers