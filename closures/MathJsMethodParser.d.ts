/**
 * MOST Web Framework 3.0 Codename Zero Gravity
 * Copyright (c) 2014-2019, THEMOST LP All rights reserved
 *
 * Use of this source code is governed by an BSD-3-Clause license that can be
 * found in the LICENSE file at https://themost.io/license
 */
import {MethodCallExpression} from "../expressions";

export declare class MathJsMethodParser {
    static round(args: any[]): MethodCallExpression;
    static ceil(args: any[]): MethodCallExpression;
    static floor(args: any[]): MethodCallExpression;
    static add(args: any[]): MethodCallExpression;
    static subtract(args: any[]): MethodCallExpression;
    static multiply(args: any[]): MethodCallExpression;
    static divide(args: any[]): MethodCallExpression;
    static bitAnd(args: any[]): MethodCallExpression;
    static mean(args: any[]): MethodCallExpression;
    static sum(args: any[]): MethodCallExpression;
    static min(args: any[]): MethodCallExpression;
    static max(args: any[]): MethodCallExpression;
    static mod(args: any[]): MethodCallExpression;
}
