sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.AdminDashboard", {
    onNavItemPress: function (oEvent) {
  const oItem = oEvent.getParameter("listItem");
  const sTitle = oItem.getTitle();

  let sViewName = "";
  switch (sTitle) {
    case "Overview":
      sViewName = "Overview";
      break;
    case "Profile":
      sViewName = "Profile";
      break;
    case "Logout":
      // Optional: Handle logout separately
      sap.ui.core.UIComponent.getRouterFor(this).navTo("Login");
      return;
  }

  // Load the view dynamically
  const oVBox = this.byId("mainContent");
  oVBox.removeAllItems();

  sap.ui.core.mvc.XMLView.create({
    viewName: `ui5.walkthrough.view.${sViewName}`
  }).then(function (oView) {
    oVBox.addItem(oView);
  });
},

    onLogoutPress: function () {
      sap.ui.core.UIComponent.getRouterFor(this).navTo("Login");
    }
  });
});
