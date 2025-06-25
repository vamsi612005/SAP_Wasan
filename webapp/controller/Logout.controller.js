sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent",
  "sap/m/MessageToast"
], function (Controller, UIComponent,MessageToast) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Logout", {
    onLogoutConfirm: function () {
        sap.ui.getCore().setModel(null, "userModel");
        sap.ui.getCore().setModel(null, "cartModel");
        MessageToast.show("You have been logged out successfully (Session cleared).");
    }
  });
});
