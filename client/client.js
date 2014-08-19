/**
 *  Client side code for Meteor Portfolio
 */

if (Meteor.isClient) {

    Template.app.rendered = function(){
        var msnry = new Masonry('#container', {
            // options
            isFitWidth: true,
            itemSelector: '.item',
            gutter: 20,
            containerStyle:{
                position: 'relative',
                width: '95%,',
                margin: '50px auto'
            }
        });
    }
}