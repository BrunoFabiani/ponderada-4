parasails.registerPage('login', {
  data: {
    syncing: false,
    formRules: {
      emailAddress: { required: true, isEmail: true },
      password: { required: true },
    },
    cloudError: '',
  },
  methods: {
    submittedForm: async function() {
      this.syncing = true;
      window.location = '/dashboard';
    },
  }
});
