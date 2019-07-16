'use strict'

module.exports = app => {
  app.post('test', '/', function* () {
    this.body = '<xml></xml>'
  })
}
