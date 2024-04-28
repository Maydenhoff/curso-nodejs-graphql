const boom = require("@hapi/boom")
const { session } = require('passport');
const CategoryService = require('./../services/category.service');
const service = new CategoryService()
const  checkRolesGql = require("../utils/auth/chechRolesGql");
const checkJWTGql = require("../utils/auth/checkJWTGql");


const addCategory = async(_, {dto}, context) => {
    const user = await checkJWTGql(context)
    checkRolesGql(user, "admin", "customer")
    return service.create({
        ...dto,
        image:dto.image.href
    })
    
}

const getCategory = async(_,{id}, context) => {
    // const user = await checkJWTGql(context)
    // checkRolesGql(user, "admin", "customer")
    // console.log(id);
    return service.findOne(id)
}


module.exports = {addCategory, getCategory}