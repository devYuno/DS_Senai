use('bosch')
db.people.find({ name: /^J.*s$/ })

use('bosch')
db.people.find({ name: 'Cesar', lastname: 'Stati' })

use('bosch')
db.people.find({ $and: [
    { name: 'Cesar'},
    { lastname: 'Lima' }
]})

use('bosch')
db.people.find({ salary: { $gte: 99 } }, { name: 1, lastname: 1})
