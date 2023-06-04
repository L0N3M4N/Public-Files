/*beautifier code */


function initialize() {
    var array = [
        '2486710VYugJb', 'myP', '6gjzwHt', 'while (true) {}', '3841875YWyOaG', 'setInterval', '14dcxrvr', 'test',
        'apply', 'debu', '5132728mhtcEi', 'constructor', '4570520OcYhzk', 'myH', 'omolxfuppvunmv0a9v5o9q7q9k78y9',
        'getElementById', 'length', 'string', 'gger', 'innerHTML', 'init', '1376580jDeStC', 'chain',
        '13700110MTjRIq', 'stateObject', '{}.constructor("return this")( )', '2ibAQvK', '757278cPXuqN',
        'return (function() ', 'action', 'counter'
    ];

    function getArray() {
        return array;
    }

    return getArray();
}

function getValue(index, callback) {
    var array = initialize();
    getValue = function (idx, cb) {
        idx = idx - 0x139;
        var value = array[idx];
        return value;
    };
    return getValue(index, callback);
}

var W = getValue;
var U = getValue;

(function (callback, targetValue) {
    var firstValue = getValue;
    var secondValue = getValue;
    var thirdValue = getValue;
    var fourthValue = getValue;
    var fifthValue = getValue;
    var sixthValue = getValue;
    var seventhValue = getValue;
    var eighthValue = getValue;
    var array = callback();

    while (true) {
        try {
            var sum =
                -parseInt(firstValue(0x140)) / 0x1 * (-parseInt(secondValue(0x13b)) / 0x2) +
                -parseInt(secondValue(0x149)) / 0x3 +
                -parseInt(thirdValue(0x14f)) / 0x4 +
                parseInt(firstValue(0x145)) / 0x5 * (-parseInt(secondValue(0x147)) / 0x6) +
                -parseInt(sixthValue(0x14b)) / 0x7 * (-parseInt(fourthValue(0x151)) / 0x8) +
                -parseInt(eighthValue(0x141)) / 0x9 +
                parseInt(thirdValue(0x13d)) / 0xa;

            if (sum === targetValue) {
                break;
            } else {
                array.push(array.shift());
            }
        } catch (error) {
            array.push(array.shift());
        }
    }
})(initialize, 0xb59fa);

var executeCallback = (function () {
    var isInitialized = true;
    return function (callback, args) {
        var execute = isInitialized
            ? function () {
                  var functionName = getValue;
                  if (args) {
                      var result = args[functionName(0x14d)](callback, arguments);
                      args = null;
                      return result;
                  }
              }
            : function () {};
        isInitialized = false;
        return execute;
    };
})();

(function () {
    executeCallback(this, function () {
        var consoleLog = getValue;
        var debugFunction = getValue;
        var alertFunction = getValue;
        var errorFunction = getValue;
        var regexFunction = new RegExp('function *\(');
        var plusPlusRegex = new RegExp('\+\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var callbackFunction = getValue(consoleLog(0x13a));

        if (!regexFunction.test(callbackFunction + alertFunction(0x13c)) || !plusPlusRegex.test(callbackFunction + 'input')) {
            callbackFunction('0');
        } else {
            executeCallback();
        }
    })();
})();

document.getElementById('output').innerHTML = 'My 2nd attempt in Cryptanalysis';
document.getElementById('input').value = U(0x153);

function analyzeValue(callback) {
    function iterate(index) {
        var getValue = getValue;
        var getString = getValue;
        var getDebug = getValue;
        var getChain = getValue;
        var getAction = getValue;
        var getCounter = getValue;
        var getConstructor = getValue;
        var getApply = getValue;

        if (typeof index === getValue(0x156)) {
            return function (value) {}[getString(0x150)](getString(0x148))[getString(0x14d)](getValue(0x144));
        } else {
            if (('' + index / index)[getString(0x155)] !== 0x1 || index % 0x14 === 0x0) {
                (function () {
                    return true;
                }[getValue(0x150)](getDebug(0x14e) + getChain(0x157))['call'](getDebug(0x143)));
            } else {
                (function () {
                    return false;
                }[getConstructor(0x142)](getDebug(0x157) + getAction(0x155))[getChain(0x14d)](getChain(0x13e)));
            }
        }
        iterate(++index);
    }

    try {
        if (callback) {
            return iterate;
        } else {
            iterate(0x0);
        }
    } catch (error) {}
}

(function () {
    var getValue = W;
    var outputId = 'output';
    var inputId = 'input';
    var context;

    try {
        var targetFunction = Function(getValue(0x142) + getValue(0x13f) + ');');
        context = targetFunction();
    } catch (error) {
        context = window;
    }
    context[outputId](analyzeValue, 0x8);
})();
