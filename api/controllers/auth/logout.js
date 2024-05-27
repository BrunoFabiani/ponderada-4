module.exports = {

    friendlyName: 'Logout user',

    description: 'Essa rota permite ao usuário deslogar',

    exits: {
        success: {
            description: 'Login bem-sucedido',
            statusCode: 200
        },
    },

    inputs: {

    },

    fn: async function () {

        delete this.req.session.userId;

        return 'success'
    }

}