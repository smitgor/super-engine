import './orders/methods';
import './api';
import './users/methods';
import './shops/index';

const addDummyUser = function () {
    const SEED_USERNAME = 'partha';
    const SEED_PASSWORD = '12345';
    // adding user
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
            profile: {
                name: 'Partha Roy',
            },
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
