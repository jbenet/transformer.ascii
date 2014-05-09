var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'ascii',
  'description': 'ascii strings.',
  'schema': 'string',
});
