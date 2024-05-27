module.exports = {
    inputs: {
        idQuestion: {
            type: 'number',
            require: true
        },
        idSubmission: {
            type: 'number',
            require: true
        },
        value: {
            type: 'string',
            required: true
        }
    },
    exits: {
        success: {
            description: 'A resposta foi gravada com sucesso'
        },
        failed: {
            description: 'Houve um erro ao submeter a resposta'
        }
    },
    fn: async function (req, res) {
        return req
    },
}