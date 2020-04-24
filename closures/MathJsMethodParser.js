const {MethodCallExpression} = require('../expressions');
const {parse} = require('esprima');
const {floor} = require('mathjs');

/**
 *
 */
class MathJsMethodParser {

    constructor() {
        // test mathjs
        let func1 = function() {
            return floor(1);
        };
        let expr = parse(`void(${func1.toString()})`);
        // get method call to find out import name of mathjs
        let identifier = expr.body[0].expression.argument.body.body[0].argument.callee;
        this.prefix = [];
        if (Array.isArray(identifier.expressions)) {
            let callee = identifier.expressions[1];
            this.prefix.push(new RegExp(`^${callee.object.name}\\.(\\w+)`, 'g'));
        }
        // add mathjs prefix
        this.prefix.push(new RegExp(`^mathjs\\.(\\w+)`, 'g'));
    }

    test(name) {
        const findPrefix = this.prefix.find( prefix => {
            return prefix.test(name);
        });
        if (findPrefix) {
            const method = name.replace(findPrefix, '$1');
            if (typeof MathJsMethodParser[method] === 'function') {
                return MathJsMethodParser[method];
            }
        }
    }

    static round(args) {
        return new MethodCallExpression('round', args);
    }

    static floor(args) {
        return new MethodCallExpression('floor', args);
    }

    static ceil(args) {
        return new MethodCallExpression('ceil', args);
    }

    static mod(args) {
        return new MethodCallExpression('mod', args);
    }

    static add(args) {
        return new MethodCallExpression('add', args);
    }

    static subtract(args) {
        return new MethodCallExpression('subtract', args);
    }

    static multiply(args) {
        return new MethodCallExpression('multiply', args);
    }

    static divide(args) {
        return new MethodCallExpression('divide', args);
    }

    static bitAnd(args) {
        return new MethodCallExpression('bit', args);
    }
    static mean(args) {
        return new MethodCallExpression('avg', args);
    }
    static sum(args) {
        return new MethodCallExpression('sum', args);
    }
    static min(args) {
        return new MethodCallExpression('min', args);
    }
    static max(args) {
        return new MethodCallExpression('max', args);
    }
}

module.exports = {
    MathJsMethodParser
}
