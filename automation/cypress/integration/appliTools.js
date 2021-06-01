//#1 Verify respons of the web app on the browser
//#2 Verify repspons when a valid email address and password is used and checks if u are sign in
//#3 Verify if total Balance is 350
//#4 Verify if starbucks coffe status is complet and the amount paid is 1,250 USD

const TestData = require("../fixtures/appliTools.json");

describe("Applitools Test Cases", () => {
  it("should open the web app", () => {
    cy.visit("https://demo.applitools.com/");
    expect(true).to.equal(true);
  });

  it("should Sign in", () => {
    cy.get("#username").type("John Doe");
    cy.get("#password").type("asddsa");
    cy.get("#log-in").click();
    cy.url().should("contain", "/app.html");
  });

  it("should check Total Balance", () => {
    cy.get(".balance-value span")
      .first()
      .should("contain", TestData.totalBalanceJohnDoe );
  });

  it("should check Starbucks cofee status and the amount paid", () => {
    cy.contains("td", "Starbucks").siblings().should("contain", TestData.orderStatusComplete);
    cy.contains("td", "Starbucks").siblings().should("contain", TestData.starbucksOrderAmount);
  });
});
