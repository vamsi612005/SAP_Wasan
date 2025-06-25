sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Cart", {
    onInit: function () {
      this.getView().setModel(sap.ui.getCore().getModel("cartModel"), "cartModel");
      console.log(sap.ui.getCore().getModel("cartModel").getData());
    },

    onRemoveItemPress: function (oEvent) {
  const oButton = oEvent.getSource();
  const oCustomData = oButton.getCustomData();
  const sName = oCustomData.find(d => d.getKey() === "name").getValue();

  const oCartModel = sap.ui.getCore().getModel("cartModel");
  const aItems = oCartModel.getProperty("/items") || [];

  const iIndex = aItems.findIndex(item => item.name === sName);

  if (iIndex > -1) {
    if (aItems[iIndex].quantity > 1) {
      aItems[iIndex].quantity -= 1;
    } else {
      aItems.splice(iIndex, 1); // Remove item completely if quantity is 1
    }

    // Recalculate total price
    const fTotal = aItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    oCartModel.setProperty("/items", aItems);
    oCartModel.setProperty("/total", fTotal);
  }
}


  });
});
