
Meteor.startup(function(){

    return Meteor.methods({
       createProject: function(data){
           if(data){
                Projects.insert({
                    name: data.name,
                    category: data.category,
                    desc: data.desc,
                    client: data.client,
                    url: data.url,
                    completedOn: data.completedOn,
                    listedOn: data.listedOn,
                    imgUrl: data.imgUrl
                });
           }
           else{
               throw new Meteor.Error('422', 'Insufficient data')
           }
       }
    });
});