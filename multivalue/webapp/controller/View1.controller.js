sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
function (Controller,Filter,FilterOperator,Sorter) {
    "use strict";

    return Controller.extend("multivalue.controller.View1", {
        onInit: function () {

        },
        onSelection: function (oEvent) {
           var sel = oEvent.getParameter("selectedItem").getText();
           console.log(sel);
        },
        onSelectionMultiValue: function (oEvent){
            var aLanItems = oEvent.getParameters("selectedItem").value;
            console.log(aLanItems);
        },
        onSelectionRadioButton: function (oEvent) {
            var selectedValue = oEvent.getSource().getSelectedButton().getText();
            console.log(selectedValue);
        },
        onSelection: function (oEvent) {
            var select = oEvent.getParameter("selected");
            console.log(select);
            if(select === true){
                console.log("You are married");
            }
            else {
                console.log("You are not married");
            }
        },

        onSelectOfList: function (oEvent) {
            oEvent;
            var empD = oEvent.getParameter("listItem").getBindingContext().getProperty("empId");
            // console.log(empD);
            let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
            var index = sPath.split("/")[2];
            console.log(index);
            
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                Index:index
            });
        },

        onSearchEmp: function (oEvent) {
            var value = oEvent.getParameter("newValue");
            var aFilter = [];
            if (value !== "") {
                var oFilter = new Filter("empName",FilterOperator.Contains,value);
                aFilter.push(oFilter);
            }
            this.getView().byId("_IDGenList").getBinding("items").filter(aFilter);
        },

        sortAsc: function (oEvent) {
            var oSorter = new Sorter("empName",false);
            this.getView().byId("_IDGenList").getBinding("items").sort(oSorter);

        },
        sortDesc: function (oEvent) {
            var oSorter = new Sorter("empName",true);
            this.getView().byId("_IDGenList").getBinding("items").sort(oSorter);
        }
    });
});
