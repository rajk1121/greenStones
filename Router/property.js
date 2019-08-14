const express = require('express');
const { getProp, getPropGrid, propGridPost, propGridDel, postProp, delProp } = require('../Controller/property');
const proprouter = express.Router();

proprouter.route('')
    .get(getPropGrid)
    .post(propGridPost);
    proprouter.route('/delete/:id').delete(propGridDel);
proprouter.route('/:id')
    .get(getProp)
    .post(postProp)
    .delete(delProp);
module.exports = proprouter;