// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroupa21/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof logaligroupa21.sapui5.model.models} models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof logaligroupa21.sapui5.controller.HelloDialo} HelloDialog
     */
    function (UIComponent, models, ResourceModel, HelloDialog) {
        'use strict';

        return UIComponent.extend("logaligroupa21.sapui5.component", {

            metadata: {
                manifest: "json"
            },


            init: function () {
                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(models.createRecipient());

                var i18nModel = new ResourceModel({ bundleName: "logaligroupa21.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit: function () {

                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }
        });
    });