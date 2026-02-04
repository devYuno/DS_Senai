use('bosch')
db.people.updateOne(
    { _id: ObjectId('6981f3cb4d1a66bb48ac5bd7')},
    { $set: { name: 'Fabiola'}}
)

use('bosch')
db.people.find({ name: /a/})

use('bosch')
db.people.updateMany(
    { salary: 9999 },
    { $set: { salary: 10}}
)

use('bosch')
db.people.find({ name: /a/})