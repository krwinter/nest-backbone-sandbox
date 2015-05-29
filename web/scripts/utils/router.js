define([
    'backbone',
    'utils/events'
    ],
    function(
    Backbone,
    events
    ) {

    var router = Backbone.Router.extend({

        initialize: function() {
        },

        routes: {
            "test": "testFn"
        },

        testFn: function() {
            alert('TEST!!!');
        }

    });

    return router;

});
