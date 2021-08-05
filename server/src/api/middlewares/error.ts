/// catch 404 and forward to error handler
export const NotFoundErrorMiddleWare = ((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

/// error handlers
export const ErrorHandlerMiddleware = ((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});


