sap.ui.define([
  "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
  "use strict";

  new ComponentContainer({
    name: "ui5.walkthrough",  // The app namespace (linked to manifest.json)
    settings: {
      id: "walkthrough"
    },
    async: true
  }).placeAt("content");  // The div ID in index.html
});
