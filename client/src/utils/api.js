var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
 res.send('I like Chicken!')
})
// define the about route
router.post('/post', function (req, res) {
 res.send('This is working like a charm!')
})
// define the about route
router.delete('/delete', function (req, res) {
   res.send('This is working like a charm!')
 })

module.exports = router