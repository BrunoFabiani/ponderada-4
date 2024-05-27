const ejs = require('ejs');
const path = require('path');

module.exports = {
  friendlyName: 'Forgot Password',
  description: 'Permite que o usuário requisite a troca de sua senha',
  inputs: {
    emailAddress: {
      type: 'string',
      required: true,
    }
  },
  exits: {
    success: {
      description: 'Requisição de troca de senha feita com sucesso! Você receberá um e-mail com os próximos passos para concluir a troca de sua senha.',
      statusCode: 200,
    },
    emailNaoFornecido: {
      description: 'Por favor, forneça um e-mail válido.',
      statusCode: 400
    },
    emailNaoEncontrado: {
      description: 'O e-mail fornecido não está cadastrado. Cheque se o e-mail digitado está correto ou se cadastre primeiro.',
      statusCode: 404,
    },
  },
  fn: async function({ emailAddress }) {
    var user = await User.findOne({ emailAddress: emailAddress });

    if (!user) {
      throw 'emailNaoEncontrado';
    }
    
    const passwordChangeHashToken = await sails.helpers.hashString();
    let link = 'http://localhost:1337/change-password/' + passwordChangeHashToken;

    const emailTemplatePath = path.join(__dirname, '../../../views/emails/email-reset-password.ejs');
    const emailData = { 
      url: link, 
      username: user.fullName,
      linkTagObject: `
        <a href="${link}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #9c3806; border-radius: 1px;-webkit-border-radius: 1px; -moz-border-radius: 1px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
          <span style="display:block;padding:15px 40px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px;">Trocar senha</span></span>
        </a>
      `,
    };
    const emailHTML = await ejs.renderFile(emailTemplatePath, emailData);

    await User.update({ id: user.id }).set({ passwordChangeHashToken: passwordChangeHashToken.toString() });

    await sails.helpers.sendEmail(emailAddress, 'Resete sua senha agora', emailHTML);
  }
};
