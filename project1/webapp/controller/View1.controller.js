sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

        },
        onPress: function() {
            // alert("Hey");
           this.getOwnerComponent().getRouter().navTo("RouteView2");
           location.reload();
        },
        onSubmit: function () {
            let name = this.getView().byId("inp1").getValue();
            let msg = "welcome " + name;
            let alignment = this.getView().byId("inp2").getValue();
            this.getView().byId("_IDGenText").setText(msg);
            this.getView().byId("_IDGenText").setTextAlign(alignment);
            this.getView().byId("inp1").setEnabled(false);
            this.getView().byId("inp2").setEnabled(false);       
        },
        onHideShow: function () {

            let text = "Hide";
            let text1 = this.getView().byId("_IDGenButton3").getText(text);

            if(text1 === "Hide"){
                this.getView().byId("_IDGenText").setVisible(false);
                this.getView().byId("lbl1").setVisible(false);
                this.getView().byId("lbl2").setVisible(false);
                this.getView().byId("inp1").setVisible(false);
                this.getView().byId("inp2").setVisible(false);
    
                this.getView().byId("_IDGenButton3").setText("Show");
            }
            else {
            this.getView().byId("_IDGenText").setVisible(true);
            this.getView().byId("lbl1").setVisible(true);
            this.getView().byId("lbl2").setVisible(true);
            this.getView().byId("inp1").setVisible(true);
            this.getView().byId("inp2").setVisible(true);

            this.getView().byId("_IDGenButton3").setText("Hide");
            }
        }
    });
});