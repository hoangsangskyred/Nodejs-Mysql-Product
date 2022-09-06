module.exports = {
    success: (res, status, result) => {
      let response = {
        status: status,
        data: result
      }
      res.json(response);
    },
    error: (res, status, result) => {
      let response = {
        status: status,
        data: result
      }
      res.json(response);
    },
  };
  