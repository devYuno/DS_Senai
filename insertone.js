// show databases

use('bosch')

db.people.insertOne({
    name: "Donathan",
    last: "Lima",
    salary: 0.5
})

use('bosch')

const arrpeople = [
    {
        name: 'Cesar',
        lastname: 'Stati',
        salary: 9999
    },
    {
        name: 'Nicolas',
        lastname: 'Marques',
        salary: 1
    }
]

db.people.insertMany(arrpeople)