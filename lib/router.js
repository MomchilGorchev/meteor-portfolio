/**
 * Created by momchillgorchev on 18/08/2014.
 */

Router.configure({
    layoutTemplate: 'app',
    loadingTemplate: 'loading'
});

Router.map(function(){
    this.route('app', {
        path: '/'
    });

//    this.route('newEvent', {
//        path: '/new'
//    });
});