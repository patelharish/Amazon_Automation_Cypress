const msg = require('../config');

cy.url = {
  visitURL: () => {
  cy.fixture('baseUrl').then((data) => {
    cy.visit(data.URL);
  })
}
};

module.exports = cy.url;