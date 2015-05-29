define([
    'backbone',
    'bootstrap',
    'utils/events',
    'utils/router'
    ],
    function(
        Backbone,
        bootstrap,
        events,
        Router
    ){


        var app = {

            // Properties
            router: null,

            initialize: function() {
                console.log('app.init - we init app');
            },


            start: function() {
                console.log('app.start - we start');

                this.router = new Router();

                Backbone.history.start();

            }
        };


        return app;

});
