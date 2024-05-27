module.exports = {
  inputs: {
    password: {
      type: 'string',
      description: 'Nova senha do usuário',
      required: true
    },
    passwordConfirmation: {
      type: 'string',
      description: 'Confirmação da nova senha do usuário',
      required: true
    },
    resetToken: {
      type: 'string',
      description: 'Token de reset enviado via e-mail',
      required: true
    }
  },
  exits: {
    success: {
      description: 'Sua senha foi alterada com sucesso.',
      statusCode: 204
    },
    notEqualPassword: {
      description: 'As duas senhas não coincidem.',
      statusCode: 400
    },
    notFound: {
      description: 'Token inválido.',
      statusCode: 404
    }
  },
  fn: async function({ password, passwordConfirmation, resetToken }, exits) {
    var user = await User.findOne({ passwordChangeHashToken: resetToken });
    if (!user) {
      return exits.notFound({
        message: "Token inválido."
      });
    }

    if (password !== passwordConfirmation) {
      return exits.notEqualPassword({
        message: "As duas senhas não coincidem."
      });
    }

    await User.updateOne({ 
      id: user.id
    }).set({ 
      password: await sails.helpers.passwords.hashPassword(password) 
    });
    
    return exits.success({
      message: "Senha alterada com sucesso."
    });
  }
};
