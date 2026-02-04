use('telefonia')
db.people.find({ nome: /^a/i})

use('telefonia')
db.people.find({ telefone: /^9/})

use('telefonia')
db.people.find({ email: /gmail.com/})

use('telefonia')
db.people.find({ cidade: /São Paulo/})

use('telefonia')
db.people.find({ dataCadastro: { $gt: new Date('2023-01-01') }})

