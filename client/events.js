/**
 * Created by momchillgorchev on 10/09/2014.
 */
Template.app.events({

    'click .trigger-overlay': function(e, t){
        var item = $(e.currentTarget).closest('.item'),
            content = item.find('.item-content').clone(),
            overlay = $('#overlay');

        overlay.append(content);
        overlay.addClass('open');
    },

    'click .overlay-close': function(e, t){
        var overlay = $(e.currentTarget).closest('#overlay'),
            content = overlay.find('.item-content');

        content.fadeOut().detach();
        overlay.removeClass('open').addClass('close');
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
           headerText = btnHolder.siblings('.header-text');

       headerText.addClass('animated fadeOutUp custom-header-animation-no-delay');
       btnHolder.addClass('animated fadeOutUp custom-header-animation-delay');
       setTimeout(function(){
           Router.go('/app');
       }, 800);
   }
});