function errorHandler(res) {
  const headers = {
    // 'Content-Type': 'text/plain',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json',
  };

  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: 'fail',
      message: '欄位未填寫正確，或無此 TODO ID',
    })
  );
  res.end();
}

module.exports = errorHandler;
