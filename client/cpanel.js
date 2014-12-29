Template.cpanel.rendered = function(){
    $('#pr-completed').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true
    });
};

Template.cpanel.events({
    'submit #new-project': function(e, t){

        e.preventDefault();

        var data = {
            name: t.find('#pr-name').value || 'Demo Project',
            category: t.find('#pr-category').value || 'Internal Project',
            desc: t.find('#pr-description').value || 'Demo',
            client: t.find('#pr-client').value || 'Self',
            url: t.find('#pr-url').value || 'http://non-existing-website.io',
            completedOn: t.find('#pr-completed').value || moment(),
            listedOn: +moment().format('X'),
            imgUrl: t.find('#pr-imgurl').value || 'img/project-x.jpg'
        };

        Meteor.call('createProject', data, function(res, err){
            err ? console.log('Error occurred')
                : console.log('Success')
        });
        console.log(data);
    },

    'click #clear-collection': function(e, t){
        Meteor.call('clearCollection', function(res, err){
            err ? console.log('Error occurred')
                : console.log('Success')
        });
    }
});