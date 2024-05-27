module.exports = {
  attributes: {
    idForms: {
      model: 'form',
      required: true,
    },
    dateCreated: {
      type: 'string',
      required: true,
    },
    dateUpdated: {
      type: 'string',
      required: false,
    }
  }
};
