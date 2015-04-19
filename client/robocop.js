Meteor.subscribe('reports', function(){
  return Reports.find();
});
console.log(JSON.stringify(Reports.find({}, {sort: {createdAt: -1}})));

  Template.body.helpers({
    reports: function () {
      // Show newest tasks first
      return Reports.find({}, {sort: {createdAt: -1}});
    },
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function() {
      Session.set('counter',Session.get('counter')+1);
    }
  });