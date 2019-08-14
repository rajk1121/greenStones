var Agent = require("../Model/agent");
const fs = require('fs');
var agdesc = '';
var agcard = '';
var overall = ''
const m = fs.readFileSync('./template/template_agent.html');
agdesc = agdesc + m;
const n = fs.readFileSync('./template/template_agentcard.html');
agcard = agcard + n;
const o = fs.readFileSync('./template/template_overviewagent.html');
overall = overall + o;
const postcard = function (req, res) {
    Agent
        .create(req.body)
        .then(doc => {
            res.send(doc);
        })
        .catch(err => {
            res.status(403).send(err);
        });
};

const getacard = async function (req, res) {
    try {
        var agents = await Agent.find({});
        var op = '';
        var cdata = '';
        for (var i = 0; i < agents.length; i++) {
            op = agcard.replace(/{%firstname%}/g, agents[i]["firstname"]);
            op = op.replace(/{%lastname%}/g, agents[i]["lastname"]);
            op = op.replace(/{%rank%}/g, agents[i]["rank"]);
            op = op.replace(/{%description%}/g, agents[i]["description"]);
            op = op.replace(/{%phone%}/g, agents[i]["phone"]);
            op = op.replace(/{%email%}/g, agents[i]["email"]);
            op = op.replace(/{%img%}/g, agents[i]["img"]);

            op = op.replace(/{%LINK%}/g, agents[i]["id"]);
            cdata = cdata + op;
        }
        var out = overall.replace(/{%agent-card%}/g, cdata);
        res.send(out);
    } catch (err) {
        res.status(400).json({
            response: "Data not found",
            err: err
        });
    }
};
const getdesc = async function (req, res) {
    try {
        var idinp = req.params.id;
        // console.log(idinp);
        var agent = await Agent.findOne({ id: idinp });
        // console.log(agent);
        var op = '';
        op = agdesc.replace(/{%firstname%}/g, agent["firstname"]);
        op = op.replace(/{%lastname%}/g, agent["lastname"]);
        op = op.replace(/{%rank%}/g, agent["rank"]);
        op = op.replace(/{%description%}/g, agent["description"]);
        op = op.replace(/{%phone%}/g, agent["phone"]);
        op = op.replace(/{%email%}/g, agent["email"]);
        op = op.replace(/{%skype%}/g, agent["skype"]);
        op = op.replace(/{%linkedin%}/g, agent["linkedin"]);
        op = op.replace(/{%img4%}/g, agent["img4"]);
        op = op.replace(/{%img1%}/g, agent["img1"]);
        op = op.replace(/{%img2%}/g, agent["img2"]);
        op = op.replace(/{%img3%}/g, agent["img3"]);
        res.send(op);
    } catch (err) {
        res.status(400).json({
            response: "Data not found",
            err: err
        });
    }
};

module.exports = {
    getacard,
    postcard,
    getdesc
};
