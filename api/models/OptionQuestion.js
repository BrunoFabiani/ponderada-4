module.exports = {
  attributes: {
    idQuestions: {
      model: 'question',
      required: true,
    },
    option: {
      type: 'string',
      required: true,
    }
  },
};
