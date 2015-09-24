define(function(require) {
    'use strict';

    var ElectroplatingModel = require('ELECTROLYSIS/electrolysis/model/Electroplating/ElectroplatingModel');
    var ElectroplatingScreenView = require('ELECTROLYSIS/electrolysis/view/Electroplating/ElectroplatingScreenView');
    var inherit = require('PHET_CORE/inherit');
    var Screen = require('JOIST/Screen');
    var Image = require('SCENERY/nodes/Image');
    var epImage = require("image!ELECTROLYSIS/ep.png");
    var Environment = require('ELECTROLYSIS/electrolysis/Environment');

    var electrolysisSimString = require('string!ELECTROLYSIS/electroplating.name');

    function ElectroplatingScreen() {
        var icon = new Image(epImage);

        window.EP = {};
        
        var environment = new Environment();
        EP.model = new ElectroplatingModel(environment);
        Screen.call(this, electrolysisSimString, icon,
            function() {
                return EP.model;
            },
            function(model) {
                return new ElectroplatingScreenView(model);
            }, {
                backgroundColor: 'white'
            }
        );
    }

    return inherit(Screen, ElectroplatingScreen);
});
