exports.handler = function(event, context, callback) {
    console.log('Event: ', JSON.stringify(event, null, '\t'));
    console.log('Context: ', JSON.stringify(context, null, '\t'));
    callback(null);
};
