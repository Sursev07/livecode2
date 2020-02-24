const {Movie, Rate} = require('../models')

class movieController{
    static findAll(req, res){
        
        Movie.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static findOne(req, res){
        var id = req.params.id;

        Movie.findOne({where: {id:id}})
        .then(data=>{
            if(data){
                Rate.findAll({where:{MovieId:req.params.id}})
                .then(rates => {
                    res.status(200).json({movie:data, rates:rates})
                })
                .catch(err=>{
                    res.send(err)
                })
            }
            
        })
        .catch(err => {
            res.send(err)
        })
    }

    static update(req, res){
        var id = req.params.id;

        Movie.find(req.body, {where: {id:id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = movieController;