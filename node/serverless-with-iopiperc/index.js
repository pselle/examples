const iopipe = require('iopipe')();

exports.handler = iopipe((event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function has iopipe plugins enabled!',
      input: event
    })
  };
  callback(null, response);
});
