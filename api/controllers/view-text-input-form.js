module.exports = {


  friendlyName: 'View text input form',


  description: 'Display "Text input form" page.',


  exits: {

    success: {
      // viewTemplatePath: 'pages/forms/textForms'
      viewTemplatePath: 'pages/text-input-form'
    }

  },


  fn: async function () {

    // Respond with view
    return res.view('exemplo', { title: 'Minha Página de Exemplo' });

  }


};
