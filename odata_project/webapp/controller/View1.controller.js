sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], (Controller, Filter,FilterOperator,Sorter) => {
    "use strict";

    return Controller.extend(".contodataprojectroller.View1", {
        onInit() {
        },
        onSelection: function (oEvent) {
            var sel = oEvent.getParameter("selectedItem").getText();
            console.log(sel);
         },
         onComboSelection: function (oEvent){
             var aLanItems = oEvent.getParameters("selectedItem").value;
             console.log(aLanItems);
         },
         onSearchPrd: function (oEvent) {
            var value = oEvent.getParameter("newValue");
            var aFilter = [];
            if (value !== "") {
                var oFilter = new Filter("ProductName",FilterOperator.Contains,value);
                aFilter.push(oFilter);
            }
            this.getView().byId("_IDGenList").getBinding("items").filter(aFilter);
        },

        sortAsc: function (oEvent) {
            var oSorter = new Sorter("ProductName",false);
            this.getView().byId("_IDGenList").getBinding("items").sort(oSorter);

        },
        sortDesc: function (oEvent) {
            var oSorter = new Sorter("ProductName",true);
            this.getView().byId("_IDGenList").getBinding("items").sort(oSorter);
        },
         onSelectOfList: function (oEvent) {
            oEvent;
            var ProductID = oEvent.getParameter("listItem").getBindingContext().getProperty("ProductID");
            
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                ProductID:ProductID
            });
        },
    });
});