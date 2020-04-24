/**
 * MOST Web Framework 3.0 Codename Zero Gravity
 * Copyright (c) 2014-2019, THEMOST LP All rights reserved
 *
 * Use of this source code is governed by an BSD-3-Clause license that can be
 * found in the LICENSE file at https://themost.io/license
 */
import {MethodCallExpression} from "../expressions";

export declare class DateMethodParser {
    static getFullYear(args: any[]): MethodCallExpression;
    static getYear(args: any[]): MethodCallExpression;
    static getMonth(args: any[]): MethodCallExpression;
    static getDate(args: any[]): MethodCallExpression;
    static toDate(args: any[]): MethodCallExpression;
    static getHours(args: any[]): MethodCallExpression;
    static getMinutes(args: any[]): MethodCallExpression;
    static getSeconds(args: any[]): MethodCallExpression;
}
