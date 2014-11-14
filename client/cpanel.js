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
            name: t.find('#pr-name').value,
            category: t.find('#pr-category').value,
            desc: t.find('#pr-description').value,
            client: t.find('#pr-client').value,
            url: t.find('#pr-url').value,
            completedOn: t.find('#pr-completed').value,
            listedOn: +moment().format('X'),
            imgUrl: 'img/project-x.jpg'
        };

        Meteor.call('createProject', data, function(err, res){
            err ? console.log('Error occurred')
                : console.log('Success')
        });
        console.log(data);
    }
});