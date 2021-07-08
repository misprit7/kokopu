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
 * @class
 * @classdesc Describe a set of chess games (see also {@link Game}).
 *
 * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
 *              are allowed to instantiate {@link Database} objects.
 */
class Database {
	constructor(impl, gameCountGetter, gameGetter) {
		this._impl = impl;
		this._gameCountGetter = gameCountGetter;
		this._gameGetter = gameGetter;
	}
	/**
	 * Number of games in the database.
	 *
	 * @returns {number}
	 */
	gameCount() {
		return this._gameCountGetter(this._impl);
	}
	game(index) {
		return this._gameGetter(this._impl, index);
	}
	/**
	 * Return the errors generated when creating the database.
	 */
	errors() {
		return this._impl.errors;
	}
}

exports.Database = Database





