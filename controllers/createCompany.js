const Company = require('../models/createCompany.js')
const { 
    v1: uuidv1,
  } = require('uuid');


const createCompany = async(req,res) => {
    try {
        const {companyName} = req.body
        const companyInformation = await Company.create({companyName,  companyId: uuidv1()})
        return res.status(201).json({
            status: true,
            companyInformation
        })
    } catch(err) {
        return res.status(500).json({status: false, message: err.message})
    }
}


module.exports = {createCompany}