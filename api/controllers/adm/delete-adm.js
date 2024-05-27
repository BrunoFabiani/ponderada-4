module.exports =  {
    friendlyName: "Deleting users",
    description: "Essa rota deleta usuários",
    exits: {
        success: {
            description: "Usuário deletado com sucesso"
        },
        usuarioNaoEncontrado: {
            description: "Usuário não foi encontrado na base de dados",
            statusCode: 404
        }
    },
    inputs: {
        id: {
            type: "number",
            required: true
        }
    },
    fn: async function({ id }) {
        const deletedUser = await User.destroyOne({id: id})
        if (!deletedUser) throw 'usuarioNaoEncontrado' 
        return deletedUser
        // Com base no id, se for encontrado um usuário, ele será apagado
    } 
}