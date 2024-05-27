module.exports = {
    fn: async function() {
      // Função para tratar campo de texto
      async function tratarCampoTexto(texto) {
        // Validação de tipo de dado
        if (typeof texto !== 'string') {
          throw new Error('O campo deve ser uma string.');
        }
  
        // Limpeza de dados
        texto = texto.trim(); // Remover espaços em branco desnecessários
        // Outras limpezas específicas, se necessário
  
        // Retorna o texto tratado
        return texto;
      }
  
      // Função para tratar campo de número
      async function tratarCampoNumero(numero) {
        // Validação de tipo de dado
        if (typeof numero !== 'number') {
          throw new Error('O campo deve ser um número.');
        }
  
        // Retorna o número tratado
        return numero;
      }
  
      // Adicione outras funções para tratar outros tipos de campos, como datas, etc.
  
      // Return an  object containing all the helper functions
      return {
        tratarCampoTexto,
        tratarCampoNumero
        // Add other functions here
      };
    }
  };