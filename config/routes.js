module.exports.routes = {
  
  // PAGES
  'GET /login':                                  { action: 'auth/view-login' },
  'GET /forgot-password':                        { action: 'auth/view-forgot-password' },
  'GET /change-password':                        { action: 'auth/view-change-password' },
  'GET /select':                                 { action: 'auth/view-select' },
  
  // API V1
  'GET /api/v1/adm/:id':                         { action: 'adm/list-adm' },
  'GET /api/v1/adm':                             { action: 'adm/list-adm' },
  'POST /api/v1/adm':                            { action: 'adm/create-adm' },
  'PATCH /api/v1/adm':                           { action: 'adm/update-adm' },
  'DELETE /api/v1/adm/:id':                      { action: 'adm/delete-adm' },

  'POST /api/v1/auth/login':                     { action: 'auth/login' },
  '/api/v1/auth/logout':                         { action: 'auth/logout' },

  'POST /api/v1/forgot-password':                { action: 'auth/forgot-password' },
  'POST /api/v1/change-password':                { action: 'auth/change-password' },

  '/selectForms':                                { view: 'pages/forms/selectForms' },
  '/textForms':                                  { view: 'pages/forms/textForms' },

  'POST /suacontroller/criarregistro': 'SuaController.criarRegistro',
}