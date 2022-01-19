const Client = require('../models/clientModel');
const AppError = require('../utils/appError');

exports.createClient = async (req, res, next) => {
    try{
        const {firstName, lastName, email, phoneNumber} = req.body;
        if(!firstName || !lastName || !email || !phoneNumber) {
            return next(new AppError("Please provide all informations", 400));
        }
        const newClient = await Client.create(req.body);
        if(!newClient) {
            return next(new AppError("Can not create a client", 400));
        }

        res.status(201).json({
            status: 'success',
            newClient
        })

    } catch(err){
        console.log(err.message);
    }
}

exports.getClient = async (req, res, next) => {
    try{
        const client = await Client.findById(req.params.id);
        if(!client){
            return next(new AppError('Can not find client', 400));
        }

        res.status(200).json({
            status: 'success',
            client
          });

    } catch(err){
        console.log(err.message);
    }
}

exports.getClients = async (req, res, next) => {
    try{
        const clients = await Client.find();
        if(!clients){
            return next(new AppError('Can not find clients', 400));
        }

        res.status(200).json({
            status: 'success',
            clients
          });

    } catch(err){
        console.log(err.message);
    }
}

exports.updateClient = async (req, res, next) => {
    try{
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          });

          if(!client){
            return next(new AppError('Can not find client', 400));
        }

        res.status(200).json({
            status: 'success',
            client
          });

    } catch(err){
        console.log(err.message);
    }
}

exports.deleteClient = async (req, res, next) => {
    try{
        const client = await Client.findByIdAndDelete(req.params.id);

        if(!client){
            return next(new AppError('Can not find client', 400));
        }

        res.status(200).json({
            status: 'success',
            client
          });

    } catch(err){
        console.log(err.message)
    } 
}