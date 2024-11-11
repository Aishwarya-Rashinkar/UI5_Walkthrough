sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("layouts.controller.View2", {
            onInit: function () {

            },
            onSubmit: function () {
                let empId = this.getView().byId("empIDIn").getValue();
                let empName = this.getView().byId("empName").getValue();
                let empDesignation = this.getView().byId("empDes").getValue();
                let empSkill = this.getView().byId("empSkill").getValue();
                let empEmail = this.getView().byId("empEmail").getValue();
                let empPhone = this.getView().byId("empPhone").getValue();

                let allFine = true;

                // let setErrorEmployeeDetails = { //Mandantory Field Validation
                //     empId : this.getView().byId("empIDIn").setValueState("Error"),
                //     empName : this.getView().byId("empName").setValueState("Error"),
                //     empDesignation : this.getView().byId("empDes").setValueState("Error"),
                //     empSkill : this.getView().byId("empSkill").setValueState("Error"),
                //     empEmail : this.getView().byId("empEmail").setValueState("Error"),
                //     empPhone : this.getView().byId("empPhone").setValueState("Error"),
                //     empId : this.getView().byId("empIDIn").setValueStateText("Enter valid entry"),
                //     empName : this.getView().byId("empName").setValueStateText("Enter valid entry"),
                //     empDesignation : this.getView().byId("empDes").setValueStateText("Enter valid entry"),
                //     empSkill : this.getView().byId("empSkill").setValueStateText("Enter valid entry"),
                //     empEmail : this.getView().byId("empEmail").setValueStateText("Enter valid entry"),
                //     empPhone : this.getView().byId("empPhone").setValueStateText("Enter valid entry")
                // }

                //Employee ID
                let empIdRegExp = /^[0-9]+$/;
                if (empId === "") {
                    allFine = false;
                    this.getView().byId("empIDIn").setValueState("Error"),
                        this.getView().byId("empIDIn").setValueStateText("Enter valid Entry")
                }
                else if (!empId.match(empIdRegExp) || empId.length != 8) {
                    this.getView().byId("empIDIn").setValueState("Error"),
                        this.getView().byId("empIDIn").setValueStateText("Employee ID should be only digits of lenght 8")
                }
                else {
                    this.getView().byId("empIDIn").setValueState("None");
                }


                //Employee Name
                let empNameRegExp = /^[A-Za-z]+$/;
                if (empName === "") {
                    allFine = false;
                    this.getView().byId("empName").setValueState("Error"),
                        this.getView().byId("empName").setValueStateText("Enter valid Entry")
                }
                else if (!empName.match(empNameRegExp)) {
                    this.getView().byId("empName").setValueState("Error"),
                        this.getView().byId("empName").setValueStateText("Employee Name should be only albhabets")
                }
                else {
                    this.getView().byId("empName").setValueState("None");
                }

                //Employee Designation
                // let empDesRegExp = /^[A-Za-z]+$/;
                if (empDesignation === "") {
                    allFine = false;
                    this.getView().byId("empDes").setValueState("Error"),
                        this.getView().byId("empDes").setValueStateText("Enter valid Entry")
                }
                else {
                    this.getView().byId("empDes").setValueState("None");
                }

                //Employee Designation
                // let empSkillRegExp = /^[a-zA-Z0-9_]+$/;
                if (empSkill === "") {
                    allFine = false;
                    this.getView().byId("empSkill").setValueState("Error"),
                        this.getView().byId("empSkill").setValueStateText("Enter valid Entry")
                }
                else {
                    this.getView().byId("empSkill").setValueState("None");
                }


                //Employee Designation
                let empEmailRegExp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
                if (empEmail === "") {
                    allFine = false;
                    this.getView().byId("empEmail").setValueState("Error"),
                        this.getView().byId("empEmail").setValueStateText("Enter valid Entry")
                }
                else if (!empEmail.match(empEmailRegExp)) {
                    this.getView().byId("empEmail").setValueState("Error"),
                        this.getView().byId("empEmail").setValueStateText("Employee Email should be in this pattern abc@gmail.com")
                }
                else {
                    this.getView().byId("empEmail").setValueState("None");
                }

                //Employee Phone
                let empPhoneRegExp = /^[0-9]+$/;
                if (empPhone === "") {
                    allFine = false;
                    this.getView().byId("empPhone").setValueState("Error"),
                        this.getView().byId("empPhone").setValueStateText("Enter valid Entry")
                }
                else if (!empPhone.match(empPhoneRegExp)) {
                    this.getView().byId("empPhone").setValueState("Error"),
                        this.getView().byId("empPhone").setValueStateText("Employee Phone should be in this pattern abc@gmail.com")
                }
                else {
                    this.getView().byId("empPhone").setValueState("None");
                }
            },
        });
    });
