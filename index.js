var Type = require('transformer-type');

module.exports = new Type({
  // @context and type filled in automatically.
  'id': 'ascii',
  'description': 'ascii strings.',
  'schema': 'string',
});
