const {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson} = require('../controllers/people')


const express = require('express')
const router = express.Router()


/* 
router.get('', getPerson)

router.post('/', createPerson)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson) */


// another way to show the routes - prefer first one i think
router.route('/').get(getPerson).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router