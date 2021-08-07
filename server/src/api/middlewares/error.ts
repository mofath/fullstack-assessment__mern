/// catch 404 and forward to error handler
export const NotFoundErrorMiddleWare = ((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

/// error handlers
export const ErrorHandlerMiddleware = ((err, req, res, next) => {
  // TODO: Handle different errors
  // Temporarily set status code to 400 to be able to caught in the client 
  res.status = 400;
  res.json({
    error: {
      message: err.message,
    },
  });
});


