sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Login", {
    onInit: function () {
      const oUserModel = new JSONModel("model/users.json");
      this.getView().setModel(oUserModel, "users");
    },

   onLoginPress: function () {
  const sUsername = this.getView().byId("username").getValue();
  const sPassword = this.getView().byId("password").getValue();

  const oUserModel = this.getView().getModel("users");
  const aUsers = oUserModel.getProperty("/users");

  const oMatchedUser = aUsers.find(user =>
    user.username === sUsername && user.password === sPassword);

  if (oMatchedUser) {
    MessageToast.show("Login successful!");

    // ✅ Set logged-in user globally
    const oGlobalUserModel = new JSONModel(oMatchedUser);
    sap.ui.getCore().setModel(oGlobalUserModel, "userModel");

    // ✅ Navigate based on role
    const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    if (oMatchedUser.role === "Admin") {
      oRouter.navTo("AdminDashboard");
    } else {
      oRouter.navTo("App");
      console.log(sap.ui.getCore().getModel("userModel").getData())
    }
  } else {
    MessageToast.show("Invalid username or password");
  }
}

  });
});
