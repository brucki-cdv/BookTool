const Client = require('../models/clientModel')

exports.createClient = async (req, res, next) => {
    try{
        const newClient = await Client.create(req.body);
        res.status(201).json({
            status: 'success added data',
            data: {
             newClient
            }
        })
    } catch(err){
        console.log(err.message);
    }
}

exports.getClient = async (req, res, next) => {
    try{
        const client = await Client.findById(req.params.id);
        if(!client){
            return next('Can not find client with this Id');
        }
        res.status(200).json({
            status: 'success',
            data: {
              client
            }
          });
    } catch(err){
        console.log(err.message);
    }
}

exports.getClients = async (req, res, next) => {
    try{
        const clients = await Client.find();
        if(!clients){
            return next('Clients not found');
        }
        res.status(200).json({
            status: 'success',
            data: {
              clients
            }
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
              return next('Can not update client');
          }

          res.status(200).json({
            status: 'success',
            data: {
              client
            }
          });

    } catch(err){
        console.log(err.message);
    }
}

exports.deleteClient = async (req, res, next) => {
    try{
        const client = await Client.findByIdAndDelete(req.params.id)
        if(!client){
            return next('None client find with this Id');
        }

        res.status(204).json({
            status: 'success',
            data: null
          });


    } catch(err){
        console.log(err.message)
    } 
}