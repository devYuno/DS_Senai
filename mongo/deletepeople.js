use('bosch')
db.people.deleteOne( {
    _id: ObjectId('6981f3cb4d1a66bb48ac5bd5')
})

use('bosch')
db.people.deleteMany( {
    name: /u/
})

use('bosch')
db.people.find({ name: /a/ })