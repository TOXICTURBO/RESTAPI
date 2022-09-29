__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs-1.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/team', (req, res) => {
    res.sendFile(__path + '/views/team.html')
})
router.get('/repo', (req, res) => {
    res.sendFile(__path + '/views/myrepo.html')
})
router.get('/contact', (req, res) => {
    res.sendFile(__path + '/views/contact.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

module.exports = router
