"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _loanController = _interopRequireDefault(require("./src/controllers/loanController"));

var _userController = _interopRequireDefault(require("./src/controllers/userController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Congratulations! Your first endpoint is working'
  });
});
app.get('/api/v1/users', _userController["default"].listUsers);
app.get('/api/v1/loans', _loanController["default"].getAllLoan);
app.get('/api/v1/loans/:id', _loanController["default"].getLoanById);
app.post('/api/auth/v1/signup', _userController["default"].createUser);
app.post('/api/auth/v1/signin', _userController["default"].login);
app.get('/api/v1/loans', _loanController["default"].getRepaidAndStatus);
app.get('/api/v1/loans/:id', _loanController["default"].getLoanById);
app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
var _default = app;
exports["default"] = _default;