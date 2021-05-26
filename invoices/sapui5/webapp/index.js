sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer  
     */
    function (ComponentContainer) {

        // @ts-ignore
        new ComponentContainer({
            name: "logaligroupa21.sapui5",
            setting: {
                id: "sapui5"
            },
            async: true
        }).placeAt("content");

    });