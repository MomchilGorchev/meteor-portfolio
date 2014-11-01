/**
 *  Server side code for Meteor Portfolio
 */

if (Meteor.isServer) {

    Meteor.publish('projects', function(){
        return Projects.find();
    });

    Meteor.startup(function () {

        var temp = [
            {
                name: 'Project 1',
                url: 'www.example.com',
                completed: 'Yesterday'
            },
            {
                name: 'Project 2',
                url: 'www.example.com',
                completed: 'Yesterday'
            },
            {
                name: 'Project 3',
                url: 'www.example.com',
                completed: 'Yesterday'
            }
        ];

        if(Projects.find().count() == 0){
            for(var i =0; i < temp.length; i++){
                Projects.insert(temp[i]);
                console.log('Inserting project');
            }
        }

    });
}
