"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controller = _interopRequireDefault(require("./src/controllers/controller"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].text());
app.use(_bodyParser["default"].json({
  type: 'application/json'
}));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Congratulations! Your first endpoint is working'
  });
});
app.get('/api/v1/users', _controller["default"].listUsers);
app.post('/api/auth/v1/signup', _controller["default"].createUser);
app.get('/api/v1/loans', _controller["default"].getAllLoan);
app.get('/api/v1/loans/id=2', _controller["default"].getLoanById);
app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
var _default = app;
exports["default"] = _default;