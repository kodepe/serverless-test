module.exports.handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfuly",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error, try again",
        error: error.message,
      }),
    };
  }
};
