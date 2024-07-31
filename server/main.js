import './orders/methods';
import './api';
import './users/methods';

const addDummyUser = function () {
    const SEED_USERNAME = 'test';
    const SEED_PASSWORD = '12345';
    // adding user
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }
};

Meteor.startup(async () => {
    // to be deleted //
    addDummyUser();

    // publishing logged in user so that it can be subscribed in rtk
    function userDataPublisher() {
        const userId = Meteor.userId();
        if (userId) {
            return Meteor.users.find(
                { _id: userId },
                {
                    fields: {
                        username: 1,
                    },
                }
            );
        }

        return this.ready();
    }

    Meteor.publish('userData', userDataPublisher);
});
