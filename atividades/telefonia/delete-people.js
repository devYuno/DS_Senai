use('telefonia')
db.people.deleteMany( {
    telefone: /999912345/
})

use('telefonia')
db.people.find({ nome: /a/i })

use('telefonia')
db.people.deleteMany( {
    cidade: 'Curitiba'
})

use('telefonia')
db.people.find({ nome: /a/i })