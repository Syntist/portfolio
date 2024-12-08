export const errorHandler = (e) => {
  let errorMessage = "An unexpected error occurred!";

  // If the error is structured, parse it to extract the message
  if (typeof e === "object" && e.message) {
    try {
      const errorDetails = JSON.parse(e.message);
      errorMessage = errorDetails.errmsg || errorMessage;
    } catch (parseError) {
      console.error("Failed to parse error message:", parseError);
    }
  }

  return errorMessage;
};
