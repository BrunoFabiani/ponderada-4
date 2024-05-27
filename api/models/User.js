module.exports = {
  attributes: {
    user: {
      type: 'string',
      required: false,
      example: 'Mary'
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'mary.sue@example.com'
    },
    pskHash: {
      type: 'string',
      required: true,
      protect: true,
    },
    pskSalt: {
      type: 'string',
      required: true,
      protect: true,
    },
    dateCreated: {
      type: 'string',
      required: true,
    },
    dateUpdated: {
      type: 'string',
      required: false,
    },
    tokenCreated: {
      type: 'string',
      unique: true,
      required: false,
    },
    tokenExpired: {
      type: 'string',
      required: false,
    }
  },
};
