sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Overview", {
    onInit: function () {
      const oModel = new JSONModel("model/products.json");
      this.getView().setModel(oModel);
    }
  });
});
