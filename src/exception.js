/******************************************************************************
 *                                                                            *
 *    This file is part of Kokopu, a JavaScript chess library.                *
 *    Copyright (C) 2018-2021  Yoann Le Montagner <yo35 -at- melix.net>       *
 *                                                                            *
 *    This program is free software: you can redistribute it and/or           *
 *    modify it under the terms of the GNU Lesser General Public License      *
 *    as published by the Free Software Foundation, either version 3 of       *
 *    the License, or (at your option) any later version.                     *
 *                                                                            *
 *    This program is distributed in the hope that it will be useful,         *
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of          *
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the            *
 *    GNU Lesser General Public License for more details.                     *
 *                                                                            *
 *    You should have received a copy of the GNU Lesser General               *
 *    Public License along with this program. If not, see                     *
 *    <http://www.gnu.org/licenses/>.                                         *
 *                                                                            *
 ******************************************************************************/


'use strict';


/**
 * @module exception
 * @description This module defines the exceptions used by the library.
 */



/**
 * @class
 * @classdesc Exception thrown when an invalid argument is passed to a function.
 * @static
 */
class IllegalArgument {
	constructor(functionName) {

		/**
		 * Name of the function that raises the exception.
		 * @member {string}
		 */
		this.functionName = functionName;
	}
	toString() {
		return 'Illegal argument in function ' + this.functionName;
	}
}

exports.IllegalArgument = IllegalArgument




/**
 * @class
 * @classdesc Exception thrown by the FEN parsing functions.
 * @static
 */
class InvalidFEN {
	constructor(fen, message) {

		/**
		 * FEN string that causes the error.
		 * @member {string}
		 */
		this.fen = fen;

		/**
		 * Human-readable message describing the error.
		 * @member {string}
		 */
		this.message = buildMessage(message, 2, arguments);
	}
	toString() {
		return toStringImpl('InvalidFEN', this.message);
	}
}

exports.InvalidFEN = InvalidFEN




/**
 * @class
 * @classdesc Exception thrown by the move notation parsing functions.
 * @static
 */
class InvalidNotation {
	constructor(fen, notation, message) {

		/**
		 * FEN representation of the position used to interpret the move notation.
		 * @member {string}
		 */
		this.fen = fen;

		/**
		 * Move notation that causes the error.
		 * @member {string}
		 */
		this.notation = notation;

		/**
		 * Human-readable message describing the error.
		 * @member {string}
		 */
		this.message = buildMessage(message, 3, arguments);
	}
	toString() {
		return toStringImpl('InvalidNotation', this.message);
	}
}

exports.InvalidNotation = InvalidNotation



/**
 * @class
 * @classdesc Exception thrown by the PGN parsing functions.
 * @static
 */
class InvalidPGN {
	constructor(pgn, index, lineNumber, message) {

		/**
		 * PGN string that causes the error.
		 * @member {string}
		 */
		this.pgn = pgn;

		/**
		 * Index of the character in the PGN string where the parsing fails (or a negative value is no particular character is related to the error).
		 * @member {number}
		 */
		this.index = index;

		/**
		 * Current line number
		 */
		this.lineNumber = lineNumber;

		/**
		 * Human-readable message describing the error.
		 * @member {string}
		 */
		this.message = buildMessage(message, 3, arguments);
	}
	toString() {
		return toStringImpl('InvalidPGN', '[' + this.index + '] ' + this.message);
	}
}

exports.InvalidPGN = InvalidPGN


/**
 * @class
 * @classdesc Exception thrown by the JSON parsing functions.
 * @static
 */
class InvalidJSON {
	constructor(json, index, message) {

		/**
		 * JSON string that causes the error.
		 * @member {string}
		 */
		this.json = json;

		/**
		 * Index of the character in the JSON string where the parsing fails (or a negative value is no particular character is related to the error).
		 * @member {number}
		 */
		this.index = index;


		/**
		 * Human-readable message describing the error.
		 * @member {string}
		 */
		this.message = buildMessage(message, 3, arguments);
	}
	toString() {
		return toStringImpl('InvalidJSON', '[' + this.index + '] ' + this.message);
	}
}

exports.InvalidJSON = InvalidJSON




function buildMessage(message, offset, tokens) {
	for(var i = offset; i < tokens.length; ++i) {
		var re = new RegExp('%' + (i - offset + 1) + '\\$s');
		message = message.replace(re, tokens[i]);
	}
	return message;
}


function toStringImpl(exceptionName, message) {
	return exceptionName + ' -> ' + message;
}
