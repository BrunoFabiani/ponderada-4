module.exports = {
  friendlyName: 'Create users',
  description: 'Essa rota cria nossos usuarios',
  exits: {
    success: {
      description: 'The requesting user agent has been successfully logged out.'
    },
  }, 
  inputs:{
    emailAddress: {
      type: "string",
      required: true
    },
    password: {
      type: "string",
      required: true
    }
  },
  fn: async function ({ emailAddress, password }) {
    return await User.create({ 
      emailAddress, 
      password: await sails.helpers.passwords.hashPassword(password)
    })
    // Cria um usuário com os parâmetros fornecidos 
  }
};
  