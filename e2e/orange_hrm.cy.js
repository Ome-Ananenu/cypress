describe("empty spec", () => {
 
  it("passes", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/index.php/pim/viewEmployeeList"
    );

    cy.get("#divUsername > .form-hint").type("Admin");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").click();


    cy.get("#menu_admin_viewAdminModule > b").click({ force: true });
    cy.get("#menu_admin_Job").click({ force: true });
    cy.get("#menu_admin_viewJobTitleList").click({ force: true });
    cy.wait(2000);
    cy.get("#menu_admin_viewPayGrades").click({ force: true });
    cy.wait(2000);

    cy.get("#menu_core_viewDefinedPredefinedReports").click({ force: true });
    cy.get("#search_search").type("Employee contact info");
    cy.get(".searchBtn").click();
    cy.wait(2000)
    cy.get("#menu_admin_UserManagement").click({ force: true });
    cy.get("#menu_admin_viewSystemUsers").click({ force: true });
    cy.get("#searchSystemUser_userName").type("Ogoniwa");
    cy.get("#searchSystemUser_userType").type("adash");
    cy.get("#btnAdd").click();
    // cy.wait(5000)

    // cy.get("#menu_pim_viewPimModule > b").click();
    // cy.get("#frmConfigPim > fieldset > :nth-child(1)").click();
    
  });
});
