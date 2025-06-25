sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Profile", {
    onInit: function () {
      const oUserModel = sap.ui.getCore().getModel("userModel");

      if (oUserModel) {
        this.getView().setModel(oUserModel, "userModel"); // Important: set it to the view
        console.log("UserModel in Profile:", oUserModel.getData());
      } else {
        console.warn("UserModel not found");
      }
    }
  });
});
