'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

function blockCpuFor(ms) {
	let now = new Date().getTime();
	let result = 0
	while(true) {
		result += Math.random() * Math.random();
		if (new Date().getTime() > now +ms)
			return;
	}	
}

app.get('/load', (req, res) => {
  const loadScale = "scale" in req.query ? parseInt(req.query["scale"]): (Math.random() *10) // try catch 
  blockCpuFor(loadScale);
  return res.send('OK');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

