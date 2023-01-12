import * as http from 'http';
import * as url from 'url';
import MessageController from './controllers/message.controller.js';

const port = 4001;
const host = '0.0.0.0';

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  const reqUrl = url.parse(req.url).pathname;

  if (req.method !== 'POST' || req.url !== '/encode') {
    const error = `Cannot ${req.method} ${reqUrl}`;
    res.writeHead(500);

    return res.end(JSON.stringify({ error }));
  }

  req.on('data', (data) => {
    const body = JSON.parse(String(data));

    MessageController.encode({ ...req, body }, res);
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
