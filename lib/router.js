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

    this.route('cpanel',{
        path: '/cpanel',
        waitOn: function(){
            if (!(Meteor.loggingIn() || Meteor.user())){
                this.redirect('login');
            }
        }
    });

    this.route('login', {
        path: '/login',
        waitOn: function(){
            if(Meteor.user()){
                this.redirect('appInitial');
            }
        }
    });

});