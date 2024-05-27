module.exports = {
  friendlyName: 'View change password',
  description: 'Display "change Password" page.',
  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/new-password',
    },

  },
  fn: async function () {

    if (this.req.me) {
      throw {redirect: '/'};
    }

    return {};

  }
};
