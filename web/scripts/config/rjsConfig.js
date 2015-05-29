require.config({

        baseUrl: "../scripts",

        // TODO: make prod / dev configs swappable via config flag
        // TODO: possibly make symlinks to current versions of libs

        // production paths
        paths: {
            lib: "../lib",
            text: "../lib/text",
            templates: "../templates",
            backbone: "../lib/backbone-min",
            underscore: "../lib/underscore-min",
            jquery: "../lib/jquery-2.1.3.min",
            //marionette: "../lib/backbone.marionette.min",
            bootstrap: '../lib/bootstrap.min'
        },

        paths: {
            lib: "../lib",
            text: "../lib/text",
            templates: "../templates",
            backbone: "../lib/backbone",
            underscore: "../lib/underscore",
            jquery: "../lib/jquery-2.1.3",
            //marionette: "../lib/backbone.marionette",
            bootstrap: '../lib/bootstrap'
        },

        shim: {

            bootstrap: {
                deps: ['jquery']
            }

        }

});
