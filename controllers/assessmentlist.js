'use strict';

const logger = require('../utils/logger');
const assessmentCollection = require('../models/assessment-store.js');

const assessmentslist = {
  index(request, response) {
    const viewData = {
      title: 'Assessments',
    };
    response.render('assessmentslist', viewData);
  },
};

module.exports = assessmentslist;