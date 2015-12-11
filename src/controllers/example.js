'use strict';

module.exports = () => {
  return ['get', ['/', (req, res) => {
    res.send();
  }]];
};
