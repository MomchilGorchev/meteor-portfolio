/**
 * Created by momchillgorchev on 10/09/2014.
 */
Template.app.events({
    'click .itemToggle': function(event, template){

        var _this = $(event.currentTarget),
            container = _this.closest('.item'),
            styles = {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                translateZ: 0
            };

        if(!container.hasClass('itemExpanded')){
            Session.set('ExpandedItemStyles', container.attr('style'));
            _this.toggleClass('itemOpened, close');

            $('.item').velocity(
                {
                    opacity: 0.2
                },
                {
                    duration: 200,
                    easing: 'easeInOutExpo',
                    complete: function(){
                        container.addClass('itemExpanded').velocity(styles,
                        {
                            duration: 200,
                            easing: 'easeInOutExpo',
                            complete: function(){
                                console.log('fired');
                                container.find('.item-content').velocity(
                                    {
                                        opacity: 1
                                    },
                                    {
                                        duration: 400,
                                        easing: 'easeInOutExpo',
                                        complete:function(){
                                            $(this).fadeIn('slow').css('display', 'block');
                                        }
                                    }
                                );
                            }
                        });
                    }
                }
            );

        } else {
            var originalStyles = Session.get('ExpandedItemStyles');

            container.find('.item-content').velocity(
                {
                    opacity: 0
                },
                {
                    duration: 400,
                    easing: 'easeInOutExpo',
                    complete: function(){
                        $(this).fadeOut('slow').css('display', 'none');
                        container.attr('style', originalStyles);
                        setTimeout(function(){
                            container.removeClass('itemExpanded');
                        }, 350);
                    }
                }
            );

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
    },
    'click .item': function(e, t){
        var toggle = $(e.currentTarget).find('.itemToggle');
        toggle.addClass('animated tada');
        setTimeout(function(){
            toggle.removeClass('animated tada');
        }, 650);
    }
});

Template.appInitial.events({
   'click #enterSite': function(e,t){

       var _this = $(e.currentTarget),
           btnHolder = _this.closest('.enter-btn-holder'),
           spinner = btnHolder.siblings('.main-spinner'),
           spinnerInner = spinner.find('.spinner'),
           headerText = btnHolder.siblings('.header-text');
       headerText.addClass('animated fadeOutUp custom-header-animation-no-delay');
       btnHolder.addClass('animated fadeOutUp custom-header-animation-delay');
       setTimeout(function(){
           Router.go('/app');
       }, 800);

   }
});