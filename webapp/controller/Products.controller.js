sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Products", {
    onInit: function () {
      const oProductModel = new JSONModel();
      oProductModel.loadData("model/products.json");
      this.getView().setModel(oProductModel);

      // Global cart model
      if (!sap.ui.getCore().getModel("cartModel")) {
        sap.ui.getCore().setModel(new JSONModel({
          items: [],
          total: 0
        }), "cartModel");
      }
    },

    onAddToCartButtonPress: function (oEvent) {
      const oSource = oEvent.getSource();
      const oContext = oSource.getBindingContext();
      const oProduct = oContext.getObject(); // actual product object

      const productName = oProduct.name;
      const availableStock = parseInt(oProduct.quantity);
      const price = parseFloat(oProduct.price);

      const oCartModel = sap.ui.getCore().getModel("cartModel");
      const aCartItems = oCartModel.getProperty("/items") || [];

      const existingItem = aCartItems.find(item => item.name === productName);
      const quantityInCart = existingItem ? existingItem.quantity : 0;

      if (quantityInCart + 1 > availableStock) {
        MessageToast.show(`Only ${availableStock} "${productName}" available in stock.`);
        return;
      }

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        aCartItems.push({
          name: productName,
          price: price,
          description: oProduct.description,
          image: oProduct.image,
          quantity: 1
        });
      }

      const total = aCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      oCartModel.setProperty("/items", aCartItems);
      oCartModel.setProperty("/total", total);

      MessageToast.show(`${productName} added to cart`);
    }
  });
});
