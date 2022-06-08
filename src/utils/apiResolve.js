const apiResolve = async (promise) => {
  try {
    return await promise;
  } catch (error) {
    return error.response.data;
  }
};

export default apiResolve;
