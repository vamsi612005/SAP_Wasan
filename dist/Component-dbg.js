sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device"
], function (UIComponent, Device) {
  "use strict";

  return UIComponent.extend("ui5.walkthrough.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // call parent init
      UIComponent.prototype.init.apply(this, arguments);

      // initialize router
      this.getRouter().initialize();
    }
  });
});
