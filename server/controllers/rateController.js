const {Rate} = require('../models')

class rateController{
    static create(req, res){
        var movieId = req.params.movieId;
        var rate = {
            reviewer: req.body.reviewer,
            point: req.body.point,
            MovieId: Number(movieId)
        }
        Rate.create(rate)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err=> {
            res.send(err)
        })
    }

    static delete(req, res){
        var rateId = req.params.movieId;

        Rate.destroy({where : {id:rateId}})
        .then(num =>{
            if(num == 1){
                res.status(200).json({message:"Delete rate success"})
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = rateController