import Sources from '../../imports/api/models/sources';

const orders = [
    {
        _id: 12,
        createdAt: '12AM, 22 July 2024',
        cartValue: '1548',
        paymentDetails: {
            method: 'CASH',
            isPaid: true,
        },
        customer: 'Chaitanya',
        items: [
            {
                itemId: 'ginger',
                quantity: '100gm',
            },
            {
                itemId: 'tomato',
                quantity: '500gm',
            },
            {
                itemId: 'carrot',
                quantity: '250gm',
            },
            {
                itemId: 'potato',
                quantity: '3kg',
            },
            {
                itemId: 'onion',
                quantity: '1.5kg',
            },
            {
                itemId: 'mushroom',
                quantity: '500gm',
            },
        ],
    },
    {
        _id: 14,
        createdAt: '1PM, 22 July 2024',
        cartValue: '120',
        paymentDetails: {
            method: 'Digital',
            isPaid: true,
        },
        customer: 'Vishnu Teja',
        items: [
            {
                itemId: 'beetroot',
                quantity: '100gm',
            },
            {
                itemId: 'capsicum',
                quantity: '500gm',
            },
        ],
    },
    {
        _id: 15,
        createdAt: '2PM, 22 July 2024',
        cartValue: '337',
        paymentDetails: {
            method: 'Cash',
            isPaid: true,
        },
        customer: 'Anand Tiwari',
        items: [
            {
                itemId: 'lemon',
                quantity: '100gm',
            },
            {
                itemId: 'garlic',
                quantity: '500gm',
            },
            {
                itemId: 'cucumber',
                quantity: '1kg',
            },
            {
                itemId: 'green-chilli',
                quantity: '50gm',
            },
            {
                itemId: 'ladyfinger',
                quantity: '1kg',
            },
        ],
    },
];

Meteor.methods({
    getOrderDetails(_id) {
        return orders[0];
        // if (_id) {
        //     const sourceDetails = Sources.findOne({ _id });
        //     if (sourceDetails) {
        //         sourceDetails.previewWebsite = Meteor.call(
        //             'getLinkMetaData',
        //             sourceDetails.url
        //         );
        //         sourceDetails.createdBy = Meteor.users.findOne(
        //             {
        //                 _id: sourceDetails.createdBy,
        //             },
        //             {
        //                 username: 1,
        //             }
        //         ).username;
        //         return sourceDetails;
        //     }

        //     throw new Meteor.Error('SOURCE_NOT_FOUND', "Source doesn't exist.");
        // }
        // throw new Meteor.Error(
        //     'NO_SOURCE_ID_SPECIFIED',
        //     'No source id specified'
        // );
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
