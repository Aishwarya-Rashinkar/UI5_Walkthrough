sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("layouts.controller.View1", {
        onInit: function () {

        },
        onPress: function() {
            // alert("Hey");
           this.getOwnerComponent().getRouter().navTo("RouteView2");
           location.reload();
        },
    });
});
