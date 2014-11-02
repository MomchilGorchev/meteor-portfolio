/**
 * Created by momchillgorchev on 01/11/14.
 */


Template.projects.helpers({

    projectData: function(){
        return Projects.find();
    }
});