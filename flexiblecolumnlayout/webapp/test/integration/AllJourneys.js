/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/flex/FlexLayoutwithObjpage/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/flex/FlexLayoutwithObjpage/test/integration/pages/App",
	"com/flex/FlexLayoutwithObjpage/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.flex.FlexLayoutwithObjpage.view.",
		autoWait: true
	});
});