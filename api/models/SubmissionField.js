module.exports = {
  attributes: {
    idQuestions: {
      model: 'question',
      required: true,
    },
    idSubmission: {
      model: 'submission',
      required: true,
    },
    value: {
      type: 'string',
      required: true,
    },
  }
};
