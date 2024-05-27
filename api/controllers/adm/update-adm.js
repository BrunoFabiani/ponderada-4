module.exports = {
  friendlyName: 'Update users',
  description: 'Essa rota atualiza nossos usuarios',
  exits: {
    success: {
      description: 'The requesting user agent has been successfully updated.'
    },
    usuarioNaoEncontrado: {
      description: 'O usuário não foi encontrado',
      statusCode: 404
    }
  }, 
  inputs:{
    id: {
      type: "number",
      required: true
    },
    newEmailAddress: {
      type: "string",
      required: true
    }
  },  
  fn: async function ({ id, newEmailAddress }) {
    return await User.update({ id: id })
    .set({
      emailAddress: newEmailAddress
    })
    // Atualiza o email de um usuário a partir do novo email e o seu id
  }  
};
  