const makeServerRequest = ({ methodName, params = [], callback }) => {
    try {
        Meteor.call(methodName, ...params, (error, result) => {
            console.log('error', error);
            callback(error, result);
        });
    } catch (error) {
        callback(error);
    }
};

export default makeServerRequest;
