/**
 * MOST Web Framework 3.0 Codename Zero Gravity
 * Copyright (c) 2014-2019, THEMOST LP All rights reserved
 *
 * Use of this source code is governed by an BSD-3-Clause license that can be
 * found in the LICENSE file at https://themost.io/license
 */
import {MethodCallExpression} from "../expressions";

export declare class StringMethodParser {
    startsWith(args: any[]): MethodCallExpression;
    endsWith(args: any[]): MethodCallExpression;
    toLowerCase(args: any[]): MethodCallExpression;
    toLocaleLowerCase(args: any[]): MethodCallExpression;
    toUpperCase(args: any[]): MethodCallExpression;
    toLocaleUpperCase(args: any[]): MethodCallExpression;
    indexOf(args: any[]): MethodCallExpression;
    substr(args: any[]): MethodCallExpression;
    substring(args: any[]): MethodCallExpression;
    trim(args: any[]): MethodCallExpression;
    concat(args: any[]): MethodCallExpression;
    includes(args: any[]): MethodCallExpression;
}