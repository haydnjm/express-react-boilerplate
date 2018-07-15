module.exports = app => {

  app.get('/api/testRoute', (req, res) => res.send('it works'));

};
