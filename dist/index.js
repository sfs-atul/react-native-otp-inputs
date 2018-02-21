Object.defineProperty(exports, '__esModule', { value: true })
var _jsxFileName = './index.js'
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _propTypes = require('prop-types')
var _propTypes2 = _interopRequireDefault(_propTypes)
var _reactNative = require('react-native')
var _OtpInput = require('./OtpInput')
var _OtpInput2 = _interopRequireDefault(_OtpInput)
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass,
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}
var OtpInputs = (function(_Component) {
  _inherits(OtpInputs, _Component)
  function OtpInputs() {
    var _ref
    var _temp, _this, _ret
    _classCallCheck(this, OtpInputs)
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }
    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = OtpInputs.__proto__ || Object.getPrototypeOf(OtpInputs)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = { loading: false, otpCode: [] }),
      (_this.maxIndex = _this.props.numberOfInputs - 1),
      (_this.minIndex = 0),
      (_this.inputs = []),
      (_this._updateOtpCode = function(text, index) {
        if (text) {
          var otpCode = _this.state.otpCode
          otpCode[index] = text
          _this.setState({ otpCode: otpCode, error: null })
          if (index === _this.maxIndex) {
            return _reactNative.Keyboard.dismiss()
          }
          if (index > _this.minIndex || index < _this.maxIndex) {
            _this._focusNextInput(index + 1)
          }
        }
      }),
      (_this._handleBackspace = function(_ref2, index) {
        var nativeEvent = _ref2.nativeEvent
        if (nativeEvent.key === 'Backspace') {
          var otpCode = _this.state.otpCode
          otpCode[index] = ''
          _this.setState({ otpCode: otpCode, error: null })
          if (index > _this.minIndex && index <= _this.maxIndex) {
            _this._focusNextInput(index - 1)
          }
        }
      }),
      (_this._focusNextInput = function(index) {
        _this.inputs[index].input.focus()
      }),
      (_this._handleSubmitError = function() {
        _this.inputs.forEach(function(input) {
          return input && input._onFocus()
        })
      }),
      (_this._renderInputs = function() {
        var _this$props = _this.props,
          errorMessage = _this$props.errorMessage,
          focusedBorderColor = _this$props.focusedBorderColor,
          numberOfInputs = _this$props.numberOfInputs,
          inputContainerStyles = _this$props.inputContainerStyles,
          inputTextErrorColor = _this$props.inputTextErrorColor
        var otpCode = _this.state.otpCode
        var _loop = function _loop(index) {
          return {
            v: _react2.default.createElement(_OtpInput2.default, {
              containerStyles: inputContainerStyles,
              focusedBorderColor: focusedBorderColor,
              textErrorColor: inputTextErrorColor,
              error: errorMessage,
              handleBackspace: function handleBackspace(event) {
                return _this._handleBackspace(event, index)
              },
              ref: function ref(input) {
                return (_this.inputs[index] = input)
              },
              updateOtpCode: function updateOtpCode(text) {
                return _this._updateOtpCode(text, index)
              },
              value: otpCode[index],
              __source: { fileName: _jsxFileName, lineNumber: 83 },
            }),
          }
        }
        for (var index = 0; index < numberOfInputs; index++) {
          var _ret2 = _loop(index)
          if (typeof _ret2 === 'object') return _ret2.v
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }
  _createClass(OtpInputs, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          containerStyles = _props.containerStyles,
          errorMessage = _props.errorMessage,
          errorMessageContainerStyles = _props.errorMessageContainerStyles,
          errorMessageTextStyles = _props.errorMessageTextStyles
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: [styles.container, containerStyles],
            __source: { fileName: _jsxFileName, lineNumber: 106 },
          },
          errorMessage &&
            _react2.default.createElement(
              _reactNative.View,
              {
                style: [styles.errorMessageContainer, errorMessageContainerStyles],
                __source: { fileName: _jsxFileName, lineNumber: 108 },
              },
              _react2.default.createElement(
                _reactNative.Text,
                {
                  style: errorMessageTextStyles,
                  __source: { fileName: _jsxFileName, lineNumber: 109 },
                },
                errorMessage,
              ),
            ),
          _react2.default.createElement(
            _reactNative.View,
            {
              style: styles.inputsContainer,
              __source: { fileName: _jsxFileName, lineNumber: 112 },
            },
            this._renderInputs(),
          ),
        )
      },
    },
  ])
  return OtpInputs
})(_react.Component)
OtpInputs.propTypes = {
  containerStyles: ViewPropTypes.style,
  errorMessage: _propTypes2.default.string,
  errorMessageContainerStyles: ViewPropTypes.style,
  errorMessageTextStyles: ViewPropTypes.style,
  focusedBorderColor: _propTypes2.default.string,
  inputContainerStyles: ViewPropTypes.style,
  inputTextErrorColor: _propTypes2.default.string,
  numberOfInputs: _propTypes2.default.number,
}
OtpInputs.defaultProps = {
  focusedBorderColor: '#0000ff',
  inputTextErrorColor: '#ff0000',
  numberOfInputs: 4,
}
exports.default = OtpInputs
var styles = _reactNative.StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start' },
  indputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  errorMessageContainer: { marginHorizontal: 25 },
})