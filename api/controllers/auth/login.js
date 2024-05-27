module.exports = {
  friendlyName: 'Login user',
  description: 'Essa rota permite ao usuário logar',
  exits: {
    success: {
      description: 'Login bem-sucedido',
      statusCode: 200
    },
    entradasInsuficientes: {
      description: 'Email ou Senha incorretos',
      statusCode: 400
    },
    usuarioNaoEncontrado: {
      description: 'O usuário não encontrado',
      statusCode: 404
    },
    senhaIncorreta: {
      description: 'Senha incorreta',
      statusCode: 401
    }
  },
  inputs: {
    emailAddress: {
      type:  'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  fn: async function({ emailAddress, password }) {
    if (!emailAddress || !password) {
      throw 'entradasInsuficientes';
    }
    var user = await User.findOne({ emailAddress: emailAddress });
    if(!user) {
      throw 'usuarioNaoEncontrado';
    }
    await sails.helpers.passwords.checkPassword(password, user.password)
        .intercept('incorrect', 'senhaIncorreta');
    this.req.session.userId = user.id;
    return 'success';
  }
};
