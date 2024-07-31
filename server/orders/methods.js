import Sources from '../../imports/api/models/sources';

const orders = [
    {
        _id: 12,
        createdAt: '22 July 2024',
        cartValue: '1548',
        paymentDetails: {
            method: 'CASH',
            isPaid: true,
        },
        customer: 'Chaitanya',
        items: [
            {
                itemId: '11',
                quantity: '11',
            },
            {
                itemId: '14',
                quantity: '1',
            },
        ],
    },
];

Meteor.methods({
    getOrderDetails(_id) {
        return orders[0];
        if (_id) {
            const sourceDetails = Sources.findOne({ _id });
            if (sourceDetails) {
                sourceDetails.previewWebsite = Meteor.call(
                    'getLinkMetaData',
                    sourceDetails.url
                );
                sourceDetails.createdBy = Meteor.users.findOne(
                    {
                        _id: sourceDetails.createdBy,
                    },
                    {
                        username: 1,
                    }
                ).username;
                return sourceDetails;
            }

            throw new Meteor.Error('SOURCE_NOT_FOUND', "Source doesn't exist.");
        }
        throw new Meteor.Error(
            'NO_SOURCE_ID_SPECIFIED',
            'No source id specified'
        );
    },
    getAllOrders(page) {
        const sourcesList = Sources.find(
            {},
            {
                sort: { createdOn: -1 },
                skip: page * Meteor.settings.public.pageSize,
                limit: Meteor.settings.public.pageSize,
            }
        ).fetch();
        return orders;
    },
});
