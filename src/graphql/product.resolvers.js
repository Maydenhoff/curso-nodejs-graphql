const getProduct = (_, {id}) => {
    return {
        id,
        name: "product 1",
        price: 1000.12,
        description: "La descripcion",
        image: "http://image",
        createAt: new Date().toISOString()
    }
}

const getProducts = () => {
    return []
}

// const addProduct = () => {22-----
// }

module.exports = {getProduct, getProducts}