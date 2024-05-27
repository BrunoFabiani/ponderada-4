module.exports = {
  attributes: {
    idForms: {
      model: 'form',
      required: true,
    },
    question: {
      type: 'string',
      required: true,
    },
    typeQuestion: {
      type: 'string',
      required: true,
    },
    isRequired: {
      type: 'boolean',
    },
    label: {
      type: 'string',
      required: false,
    },
    placeholder: {
      type: 'string',
      required: false,
    }
  }
};
