const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - list all the trips
// reguardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // return single record
        .exec();

    // uncomment the following line to show results of query
    //on the console
    console.log(q);

    if(!q) {
        // DB returned no data
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode }) // return single record
        .exec();

    // uncomment the following line to show results of query
    //on the console
    // console.log(q);

    if (!q) {
        // DB returned no data
        return res
            .status(404)
            .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};