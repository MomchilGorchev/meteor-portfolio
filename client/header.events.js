/**
 * Created by momchillgorchev on 26/10/14.
 */

Template.header.events({
   'click .logo': function(e, t){
       Router.go('/');
   }
});