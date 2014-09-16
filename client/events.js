/**
 * Created by momchillgorchev on 10/09/2014.
 */
Template.app.events({
    'click .expand': function(event, template){
        var _this = $(event.currentTarget),
            container = _this.closest('.item'),
            styles = {
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
            };
        console.log(_this);
        Session.set('ExpandedItemStyles', container.attr('style'));
        $('.item').not(container).animate({
            opacity: 0.2
            }, 500,
            function(){
                container.css(styles).addClass('itemExpanded');
            }
        );
    },

    'click .closeExpandedItem': function(event, template){
        var _this = $(event.currentTarget),
            container = _this.closest('.item'),
            originalStyles = Session.get('ExpandedItemStyles');
        console.log(originalStyles);
        container.attr('style', originalStyles).removeClass('itemExpanded');
        $('.item').not(container).animate({
            opacity: 1
        }, 500);

    }
});