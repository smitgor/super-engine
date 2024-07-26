Meteor.startup(function () {
  Meteor.publish('userData', function () {
    const userId = Meteor.userId();
    if (userId) {
      return Meteor.users.find({_id: userId}, {fields: {_id: 1, 'services.google': 1, profile: 1}});
    }
    return this.ready();
  });
  ServiceConfiguration.configurations.upsert(
    {service: 'google'},
    {
      $set: {
        ...Meteor.settings.serviceConfigurations.google,
      },
    },
  );
});
