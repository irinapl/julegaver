const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;
