const fs = require('fs');
const mongoose = require('mongoose');
var str = fs.readFileSync("./template/prop-single-temp.html").toString();
var str1 = fs.readFileSync("./template/property-single.html").toString();
var str2 = fs.readFileSync("./template/prop-grid-temp.html").toString();
const propGridModel = require("../Model/prop-grid.js");
var str3 = fs.readFileSync("./template/property-grid.html").toString();
var propModel = require('../Model/prop-single');
const getProp = async (req, res) => {
    var id = req.params.id;
    var data = await propModel.findOne({ "id": id });
    console.log(typeof data)
    var str6 = str1;
    var str5 = str;
    // console.log(data.title)
    str5 = str5.replace(/{%TITLE%}/g, data["title"]);
    str6 = str6.replace(/{%TITLE%}/g, data["title"]);
    str5 = str5.replace(/{%LOCATION%}/g, data["location"]);
    str5 = str5.replace(/{%LINK1%}/g, data["link1"]);
    str5 = str5.replace(/{%LINK2%}/g, data["link2"]);
    str5 = str5.replace(/{%LINK3%}/g, data["link3"]);
    str5 = str5.replace(/{%RENT%}/g, data["rent"]);
    str5 = str5.replace(/{%ID%}/g, data["id"]);
    console.log(data.id)
    str5 = str5.replace(/{%LOCATION%}/g, data["location"]);
    str5 = str5.replace(/{%TYPE%}/g, data["type"]);
    str5 = str5.replace(/{%STATUS%}/g, data["status"]);
    str5 = str5.replace(/{%AREA%}/g, data["area"]);
    console.log(data)
    str5 = str5.replace(/{%BEDS%}/g, data["beds"]);
    str5 = str5.replace(/{%ROOOMS%}/g, data["rooms"]);

    str5 = str5.replace(/{%BATHS%}/g, data["baths"]);
    str5 = str5.replace(/{%GARAGES%}/g, data["garages"]);
    str5 = str5.replace(/{%DESCRIPTION1%}/g, data["desc1"]);
    str5 = str5.replace(/{%DESCRIPTION2%}/g, data["desc2"]);
    str5 = str5.replace(/{%ONE%}/g, data["one"]);
    str5 = str5.replace(/{%TWO%}/g, data["two"]);
    str5 = str5.replace(/{%THREE%}/g, data["three"]);
    str5 = str5.replace(/{%FOUR%}/g, data["four"]);
    str5 = str5.replace(/{%FIVE%}/g, data["five"]);
    str5 = str5.replace(/{%SIX%}/g, data["six"]);
    str5 = str5.replace(/{%SEVEN%}/g, data["seven"]);
    str5 = str5.replace(/{%EIGHT%}/g, data["eight"]);
    str5 = str5.replace(/{%NINE%}/g, data["nine"]);

    str5 = str5.replace(/{%AGENT_PIC%}/g, data["agent-pic"]);
    str5 = str5.replace(/{%AGENT-NAME%}/g, data["agent-name"]);
    str5 = str5.replace(/{%AGENT-DESC%}/g, data["agent-desc"]);
    // console.log(str5);
    str6 = str6.replace(/{%WORK%}/, str5);
    // // console.log(str6);

    res.send(str6);
    res.end();

}
const postProp = (req, res) => {
    propModel.create(req.body).then((doc) => {
        res.status(201).json({
            status: "Created",
            result: doc
        })
    }).catch((err) => {
        res.status(404).json({
            status: 'Failed',
            error: err
        })
    })
}
const delProp = async (req, res) => {
    var id = req.params.id;
    try {
        var data = await propModel.deleteOne({ "id": id });
        res.status(201).json({
            status: "Deleted",
            result: data
        })
    }
    catch (err) {
        res.send(404).json({
            status: "Failed",
            error: err
        })
    }
}
const getPropGrid = async (req, res) => {
    var json = await propGridModel.find({});
    var length = json.length;
    // console.log(length);
    var str7 = str3;
    var ans = "";
    // console.log(propGridModel)
    // console.log(json)
    var str4 = "";
    for (var i = 0; i < length; i++) {

        // console.log('**********************')
        str4 = str2;
        var id = i + 1;
        var adat = await propGridModel.findOne({ "id": id });
        // console.log(adat);
        str4 = str4.replace(/{%RENT%}/, adat.rent);

        str4 = str4.replace(/{%AREA%}/, adat.area);

        str4 = str4.replace(/{%Baths%}/, adat.baths);

        str4 = str4.replace(/{%ROOMS%}/, adat.rooms);

        str4 = str4.replace(/{%Garages%}/, adat.garages);
        str4 = str4.replace(/{%LINK%}/, adat.links);

        ans = ans + str4;
        // console.log(ans);

    }
    str7 = str7.replace(/{%WORK%}/, ans);
    // console.log(str7);
    res.send(str7);
    res.end();

}
const propGridPost = (req, res) => {


    console.log("Helllo")
    console.log(req.body)
    propGridModel.create(req.body).then(function (doc) {
        res.status(201).json({
            status: "Created",
            result: doc
        })
    }).catch((err) => {
        res.status(404).json({
            status: "Failed",
            Error: err
        })
    });




}
const propGridDel = async (req, res) => {
    try {
        var id = req.query.id;
        var data = await propGridModel.deleteOne({ "_id": id });
        res.status(201).json({
            status: "Deleted",
            result: data
        })
    }
    catch (err) {
        res.status(404).json({
            status: "Failed",
            result: err
        })

    }
}
module.exports = { getProp, getPropGrid, propGridPost, propGridDel, postProp, delProp };