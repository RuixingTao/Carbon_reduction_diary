var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, u, i) {
    return (0, r.request)("".concat(t.default.api_url[0], "/").concat(e), u, i);
};

var r = require("../utils/index"), t = e(require("../config/index"));