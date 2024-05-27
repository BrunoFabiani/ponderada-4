module.exports = {
  friendlyName: 'View forgot password',
  description: 'Display "Forgot Password" page.',
  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/forgot-password',
    },

  },
  fn: async function () {

    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};

  }
};
