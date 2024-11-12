sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("layouts.controller.View2", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
            },
            onPatternMatched: function () {
                var empId = this.getOwnerComponent().getModel().getProperty("/empId");
                var empName = this.getOwnerComponent().getModel().getProperty("/empName");
                var empDesig = this.getOwnerComponent().getModel().getProperty("/empDesig");
                var empSkill = this.getOwnerComponent().getModel().getProperty("/empSkill");
                var empEmail = this.getOwnerComponent().getModel().getProperty("/empEmail");
                var empPhone = this.getOwnerComponent().getModel().getProperty("/empPhone");

                this.getView().byId("empIDTxt").setText(empId);
                this.getView().byId("empNameTxt").setText(empName);
                this.getView().byId("empDesTxt").setText(empDesig);
                this.getView().byId("empSkillTxt").setText(empSkill);
                this.getView().byId("empEmailTxt").setText(empEmail);
                this.getView().byId("empPhoneTxt").setText(empPhone);
            }
        });
    });
