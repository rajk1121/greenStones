const Card = require("../Model/cardreview");
const Review = require("../Model/review");
const fs = require("fs");
var revdesc = "";
var revcard = "";
var overall = "";
const m = fs.readFileSync("./template/template_desc.html");
revdesc = revdesc + m;
const n = fs.readFileSync("./template/template_reviewcard.html");
revcard = revcard + n;
const o = fs.readFileSync("./template/template_overview.html");
overall = overall + o;
const postcard = function (req, res) {
  Card.create(req.body)
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      res.status(403).send(err);
    });
};
const getacard = async function (req, res) {
  try {
    console.log("fjf");
    var agents = await Card.find({});
    // console.log(agents);
    var op = "";
    var cdata = "";
    for (var i = 0; i < agents.length; i++) {
      op = revcard.replace(/{%name%}/g, agents[i]["name"]);
      op = op.replace(/{%description%}/g, agents[i]["description"]);
      op = op.replace(/{%address%}/g, agents[i]["address"]);
      op = op.replace(/{%price%}/g, agents[i]["price"]);
      op = op.replace(/{%img1%}/g, agents[i]["img1"]);
      op = op.replace(/{%img2%}/g, agents[i]["img2"]);
      op = op.replace(/{%img3%}/g, agents[i]["img3"]);

      op = op.replace(/{%ID%}/g, agents[i]["id"]);
      cdata = cdata + op;
    }
    // console.log(cdata);
    var out = overall.replace(/{%cards%}/g, cdata);
    res.send(out);
  } catch (err) {
    res.status(400).json({
      response: "Data not found",
      err: err
    });
  }
};
const getdesc = async function (req, res) {
  // try {
  var idinp = req.params.id;
  console.log(idinp);
  var agent = await Review.findOne({ id: idinp });
  console.log(agent);
  var op = "";
  op = revdesc.replace(/{%name1%}/g, agent["name1"]);
  // console.log("hello");
  op = op.replace(/{%name2%}/g, agent["name2"]);
  // console.log("2");
  op = op.replace(/{%name3%}/g, agent["name3"]);
  // console.log("2");
  op = op.replace(/{%review1%}/g, agent["review1"]);
  // console.log("2");
  op = op.replace(/{%review2%}/g, agent["review2"]);
  // console.log("2");
  op = op.replace(/{%review3%}/g, agent["review3"]);
  // console.log("2");
  op = op.replace(/{%img1%}/g, agent["img1"]);
  // console.log("2");
  op = op.replace(/{%img2%}/g, agent["img2"]);
  // console.log("2");
  op = op.replace(/{%img3%}/g, agent["img3"]);
  // console.log("2");
  op = op.replace(/{%img11%}/g, agent["img11"]);
  // console.log("2");
  op = op.replace(/{%img12%}/g, agent["img12"]);
  // console.log("2");
  op = op.replace(/{%img13%}/g, agent["img13"]);
  // console.log(op);
  res.send(op);
  // } catch (err) {
  //     res.status(400).json({
  //         response: "Data not found",
  //         err: err
  //     });
  // }
};
const postdesc = (req, res) => {
  Review.create(req.body).then((result) => {
    res.status(201).json({
      status: "Created",
      res: result
    })
  }).catch((err) => {
    res.status(401).json({
      status: "failed",
      res: err
    })
  })
}

module.exports = {
  getacard,
  postcard,
  getdesc,
  postdesc
};
