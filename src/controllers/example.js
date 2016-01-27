'use strict';

module.exports = () => {
  return ['get', ['/example', (req, res) => {
    res.send();
  }]];
};
