sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("odataproject.controller.View2", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
        },
        onPatternMatched: function (oEvent) {
            var ProductID = oEvent.getParameter("arguments").ProductID;
            this.getView().bindElement("/Products("+ProductID+")");
        }
    });
});