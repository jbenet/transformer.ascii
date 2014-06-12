#!/usr/bin/env node
var tTest = require('transformer-test')
var type = require('./')

// run stock conversion tests, and try expected input/output pairs
var test = tTest.type(type)
