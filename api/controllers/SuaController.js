
const DadosService = require('../helpers/DadosService');

const SeuModel = require('../models/SeuModel');


module.exports = {
    async criarRegistro(req, res) {
      try {
        // Recebe os dados do formulário
        const { campoTexto, campoNumero } = req.allParams();
  
        // Chama a função fn para obter as funções de tratamento
        const { tratarCampoTexto, tratarCampoNumero } = await DadosService.fn();
  
        // Trata os dados usando o serviço DadosService
        const textoTratado = await tratarCampoTexto(campoTexto);
        const numeroTratado = await tratarCampoNumero(campoNumero);
  
        // Persiste os dados no banco de dados usando o model
        const novoRegistro = await SeuModel.create({ // Use SeuModel.create
          campoTexto: textoTratado,
          campoNumero: numeroTratado
        }).fetch(); // Use fetch() to get the created record
  
        return res.ok('Registro criado com sucesso.', novoRegistro); // Send the created record in the response
      } catch (error) {
        return res.badRequest(error.message); // Retorna mensagem de erro ao cliente
      }
    },
  };