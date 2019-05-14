"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = _interopRequireDefault(require("./src/controllers/controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Congratulations! Your first endpoint is working'
  });
});
app.get('/api/v1/users', _controller["default"].listUsers);
app.get('/api/v1/loans', _controller["default"].getAllLoan);
app.get('/api/v1/loans/id', _controller["default"].getLoanById);
app.post('/api/auth/v1/signup', _controller["default"].createUser);
app.get('/api/v1/loans?status=approved&repaid=true', _controller["default"].getRepaidAndStatus);
app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
var _default = app;
exports["default"] = _default;