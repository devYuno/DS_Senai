use('telefonia')
db.people.updateMany(
    { nome: 'Amanda Souza' },
    { $set: { telefone: '987032817', email: 'amanda.souza1@gmail.com'}}
)

use('telefonia')
db.people.find({ nome: /a/i})


use('telefonia')
db.people.updateMany(
    { nome: 'Bruno Costa' },
    { $set: { cidade: 'Maringá'}}
)

use('telefonia')
db.people.find({ nome: /a/i})

use('telefonia')
db.people.updateMany(
    { telefone: /41/ },
    { $set: { cidade: 'Curitiba'}}
)

use('telefonia')
db.people.find({ nome: /a/i})