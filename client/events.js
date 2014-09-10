/**
 * Created by momchillgorchev on 10/09/2014.
 */
Template.app.events({
    'click .item': function(event, template){
        var _this = $(event.currentTarget),
            styles = {
                position: 'fixed',
                top: 0,
                left: 0
            };
        _this.css(styles).addClass('itemExpanded');
    }
});