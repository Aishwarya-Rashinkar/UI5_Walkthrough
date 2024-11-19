sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
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
        }
    });
});
