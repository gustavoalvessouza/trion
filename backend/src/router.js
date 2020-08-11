const express = require('express')
const router = express.Router()

const MissionController = require('./controllers/MissionController')
const QuestionController = require('./controllers/QuestionController')
const UserController = require('./controllers/UserController')
const UserMissionController = require('./controllers/UserMissionController')
const UserPointController = require('./controllers/UserPointController')
const SessionController = require('./controllers/SessionController')

router.post('/sessions', SessionController.store)

router.get('/missions', MissionController.index)
router.post('/mission/create', MissionController.store)
router.put('/mission/edit/:id', MissionController.update)
router.delete('/mission/del/:id', MissionController.delete)

router.get('/user/:id', UserController.index)
router.post('/user/create', UserController.store)

router.post('/mission/define/:id', UserMissionController.store)

router.put('/user/point/:id', UserPointController.update)

router.post('/question', QuestionController.store)

router.get('/questions', QuestionController.index)

module.exports = router