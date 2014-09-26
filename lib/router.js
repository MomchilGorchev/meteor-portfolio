/**
 * Created by momchillgorchev on 18/08/2014.
 */

Router.configure({
    layoutTemplate: 'portfolio',
    loadingTemplate: 'loading'
});

Router.map(function(){
    this.route('appInitial', {
        path: '/',
        template: 'appInitial'
    });

    this.route('app', {
        path: '/app',
        template: 'app'
    });

});