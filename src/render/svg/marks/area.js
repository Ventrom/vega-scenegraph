var path = require('../../../path/area');

module.exports = {
  tag:    'path',
  nested: true,
  update: function(el, items) {
    if (!items.length) return;
    el.setAttribute('d', path(items));
  }
};
