const resolve = () => {
  const error = new Error();
  error.statusCode = 404;
  console.log("wotking")
  throw error;
};

export default { resolve };