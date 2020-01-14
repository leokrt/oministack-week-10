const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/dev', DevController.index)
routes.get('/dev/search', SearchController.index)
routes.post('/dev', DevController.store)

module.exports = routes