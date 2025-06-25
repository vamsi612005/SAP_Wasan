sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  const oCartModel = new sap.ui.model.json.JSONModel({
    items: [],
    total: 0
  });
  sap.ui.getCore().setModel(oCartModel, "cartModel");

  return Controller.extend("ui5.walkthrough.controller.App", {
    onInit: function () {
      this._loadView("Products");
    },

    onNavItemPress: function (oEvent) {
        const oSelectedItem = oEvent.getParameter("listItem");
        const sTitle = oSelectedItem.getTitle();
        if(sTitle === "Logout"){
          sap.ui.core.UIComponent.getRouterFor(this).navTo("Login");
          return;
        }
        this._loadView(sTitle);
    },

    _loadView: function (viewName) {
      const oVBox = this.byId("mainContent");
      oVBox.removeAllItems();
      sap.ui.core.mvc.XMLView.create({
        viewName: `ui5.walkthrough.view.${viewName}`
      }).then(oView => {
        oVBox.addItem(oView);
      });
    },

    onLogoutPress: function () {
      sap.ui.core.UIComponent.getRouterFor(this).navTo("Login");
    }
  });
});
