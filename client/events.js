/**
 * Created by momchillgorchev on 10/09/2014.
 */
Template.app.events({
    'click .itemToggle': function(event, template){

        var _this = $(event.currentTarget),
            container = _this.closest('.item'),
            styles = {
                top: 0,
                left: 0
            };

        if(!container.hasClass('itemExpanded')){
            Session.set('ExpandedItemStyles', container.attr('style'));
            _this.toggleClass('itemOpened, close');

            $('.item').velocity(
                {
                    opacity: 0.2
                },
                {
                    duration: 400,
                    easing: 'easeInOutExpo',
                    complete: function(){
                        container.css(styles).addClass('itemExpanded');
                    }
                }
            );
        }else{
            var originalStyles = Session.get('ExpandedItemStyles');

            container.attr('style', originalStyles).removeClass('itemExpanded');

            $('.item').velocity(
                {
                    opacity: 1
                },
                {
                    duration: 400,
                    easing: 'easeInOutExpo',
                    complete: function(){
                        _this.toggleClass('itemOpened, close');
                    }
                }
            );
        }
    }
});

Template.appInitial.events({
   'click #enterSite': function(e,t){
       var _this = $(e.currentTarget),
           spinner = $(t).find('.main-spinner');

       Router.go('/app');
   }
});