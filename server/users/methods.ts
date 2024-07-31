import { Accounts } from 'meteor/accounts-base';

interface UserSaveParams {
    email: string;
    password: string;
    role: string;
    profile: {
        name: string;
    };
}

interface UserDetailsUpdateParams {
    profile: {
        name: string;
    };
    role: string;
}

Meteor.methods({
    getAllUsers(page: number) {
        const allUsers = Meteor.users
            .find(
                {},
                {
                    skip: page * Meteor.settings.public.pageSize,
                    limit: Meteor.settings.public.pageSize,
                    fields: { username: 1, profile: 1, emails: 1, role: 1 },
                }
            )
            .fetch();
        return allUsers;
    },
    createNewUser(data: UserSaveParams) {
        Accounts.createUser(data);
    },
    getUserDetailsById(userId: string) {
        const userDetails = Meteor.users.findOne(
            { _id: userId },
            { fields: { username: 1, profile: 1, emails: 1, role: 1 } }
        );
        return userDetails;
    },
    updateUserDetails(userId: string, data: UserDetailsUpdateParams) {
        Meteor.users.update({ _id: userId }, { $set: data });
    },
});
