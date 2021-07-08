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


var bt = require('./basetypes');
var exception = require('./exception');


var CASTLING_FLAG   = 0x01;
var EN_PASSANT_FLAG = 0x02;
var CAPTURE_FLAG    = 0x04;
var PROMOTION_FLAG  = 0x08;


exports.make = function(from, to, color, movingPiece, capturedPiece) {
	var flags = capturedPiece >= 0 ? CAPTURE_FLAG : 0x00;
	var movingColoredPiece = movingPiece*2 + color;
	return new MoveDescriptor(flags, from, to, movingColoredPiece, movingColoredPiece, capturedPiece, -1, -1);
};


exports.makeCastling = function(from, to, rookFrom, rookTo, color) {
	var movingKing = bt.KING*2 + color;
	var movingRook = bt.ROOK*2 + color;
	return new MoveDescriptor(CASTLING_FLAG, from, to, movingKing, movingKing, movingRook, rookFrom, rookTo);
};


exports.makeEnPassant = function(from, to, enPassantSquare, color) {
	var flags = EN_PASSANT_FLAG | CAPTURE_FLAG;
	var movingPawn = bt.PAWN*2 + color;
	var capturedPawn = bt.PAWN*2 + 1 - color;
	return new MoveDescriptor(flags, from, to, movingPawn, movingPawn, capturedPawn, enPassantSquare, -1);
};


exports.makePromotion = function(from, to, color, promotion, capturedPiece) {
	var flags = PROMOTION_FLAG | (capturedPiece >= 0 ? CAPTURE_FLAG : 0x00);
	var movingPawn = bt.PAWN*2 + color;
	var finalPiece = promotion*2 + color;
	return new MoveDescriptor(flags, from, to, movingPawn, finalPiece, capturedPiece, -1, -1);
};


/**
 * @class
 * @classdesc Describe a legal chess move, with its characteristics.
 *
 * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
 *              are allowed to instantiate {@link MoveDescriptor} objects.
 */
class MoveDescriptor {
	constructor(flags, from, to, movingPiece, finalPiece, optionalPiece, optionalSquare1, optionalSquare2) {
		this._type = flags;
		this._from = from;
		this._to = to;
		this._movingPiece = movingPiece;
		this._finalPiece = finalPiece;
		this._optionalPiece = optionalPiece; // Captured piece in case of capture, moving rook in case of castling.
		this._optionalSquare1 = optionalSquare1; // Rook-from or en-passant square.
		this._optionalSquare2 = optionalSquare2; // Rook-to.
	}
	toString() {
		var result = bt.squareToString(this._from) + bt.squareToString(this._to);
		if (this.isPromotion()) {
			result += this.promotion().toUpperCase();
		}
		else if (this.isCastling()) {
			result += 'O';
		}
		return result;
	}
	toUCIString() {
		var result = bt.squareToString(this._from);
		if (this.isCastling()) {
			// UCI castling is KxR of same color
			result += bt.squareToString(this._optionalSquare1);
		} else {
			result += bt.squareToString(this._to);
		}

		if (this.isPromotion()) {
			result += this.promotion().toLowerCase();
		}
		return result;
	}
	/**
	 * Whether or not the current move is a castling move.
	 *
	 * @returns {boolean}
	 */
	isCastling() {
		return (this._type & CASTLING_FLAG) !== 0;
	}
	/**
	 * Whether or not the current move is a *en-passant* move.
	 *
	 * @returns {boolean}
	 */
	isEnPassant() {
		return (this._type & EN_PASSANT_FLAG) !== 0;
	}
	/**
	 * Whether or not the current move is a capture (either a regular capture or a *en-passant* capture).
	 *
	 * @returns {boolean}
	 */
	isCapture() {
		return (this._type & CAPTURE_FLAG) !== 0;
	}
	/**
	 * Whether or not the current move is a promotion.
	 *
	 * @returns {boolean}
	 */
	isPromotion() {
		return (this._type & PROMOTION_FLAG) !== 0;
	}
	/**
	 * Origin square of the moving piece. In case of castling, this is the origin square of the king.
	 *
	 * @returns {Square}
	 */
	from() {
		return bt.squareToString(this._from);
	}
	/**
	 * Destination square of the moving piece. In case of castling, this is the destination square of the king.
	 *
	 * @returns {Square}
	 */
	to() {
		return bt.squareToString(this._to);
	}
	/**
	 * Color of the moving piece.
	 *
	 * @returns {Color}
	 */
	color() {
		return bt.colorToString(this._movingPiece % 2);
	}
	/**
	 * Type of the moving piece. In case of castling, the moving piece is considered to be the king.
	 *
	 * @returns {Piece}
	 */
	movingPiece() {
		return bt.pieceToString(Math.floor(this._movingPiece / 2));
	}
	/**
	 * Color and type of the moving piece. In case of castling, the moving piece is considered to be the king.
	 *
	 * @returns {ColoredPiece}
	 */
	movingColoredPiece() {
		return bt.coloredPieceToString(this._movingPiece);
	}
	/**
	 * Type of the captured piece.
	 *
	 * @returns {Piece}
	 * @throws {module:exception.IllegalArgument} If the current move is not a capture (see {@link MoveDescriptor#isCapture}).
	 */
	capturedPiece() {
		if (!this.isCapture()) { throw new exception.IllegalArgument('MoveDescriptor#capturedPiece()'); }
		return bt.pieceToString(Math.floor(this._optionalPiece / 2));
	}
	/**
	 * Color and type of the captured piece.
	 *
	 * @returns {ColoredPiece}
	 * @throws {module:exception.IllegalArgument} If the current move is not a capture (see {@link MoveDescriptor#isCapture}).
	 */
	capturedColoredPiece() {
		if (!this.isCapture()) { throw new exception.IllegalArgument('MoveDescriptor#capturedColoredPiece()'); }
		return bt.coloredPieceToString(this._optionalPiece);
	}
	/**
	 * Origin square of the rook, in case of a castling move.
	 *
	 * @returns {Square}
	 * @throws {module:exception.IllegalArgument} If the current move is not a castling move (see {@link MoveDescriptor#isCastling}).
	 */
	rookFrom() {
		if (!this.isCastling()) { throw new exception.IllegalArgument('MoveDescriptor#rookFrom()'); }
		return bt.squareToString(this._optionalSquare1);
	}
	/**
	 * Destination square of the rook, in case of a castling move.
	 *
	 * @returns {Square}
	 * @throws {module:exception.IllegalArgument} If the current move is not a castling move (see {@link MoveDescriptor#isCastling}).
	 */
	rookTo() {
		if (!this.isCastling()) { throw new exception.IllegalArgument('MoveDescriptor#rookTo()'); }
		return bt.squareToString(this._optionalSquare2);
	}
	/**
	 * Square containing the captured pawn, in case of a *en-passant* move.
	 *
	 * @returns {Square}
	 * @throws {module:exception.IllegalArgument} If the current move is not a *en-passant* move (see {@link MoveDescriptor#isEnPassant}).
	 */
	enPassantSquare() {
		if (!this.isEnPassant()) { throw new exception.IllegalArgument('MoveDescriptor#enPassantSquare()'); }
		return bt.squareToString(this._optionalSquare1);
	}
	/**
	 * Type of the promoted piece, in case of a promotion.
	 *
	 * @returns {Piece}
	 * @throws {module:exception.IllegalArgument} If the current move is not a promotion (see {@link MoveDescriptor#isPromotion}).
	 */
	promotion() {
		if (!this.isPromotion()) { throw new exception.IllegalArgument('MoveDescriptor#promotion()'); }
		return bt.pieceToString(Math.floor(this._finalPiece / 2));
	}
	/**
	 * Color and type of the promoted piece, in case of a promotion.
	 *
	 * @returns {ColoredPiece}
	 * @throws {module:exception.IllegalArgument} If the current move is not a promotion (see {@link MoveDescriptor#isPromotion}).
	 */
	coloredPromotion() {
		if (!this.isPromotion()) { throw new exception.IllegalArgument('MoveDescriptor#coloredPromotion()'); }
		return bt.coloredPieceToString(this._finalPiece);
	}
}

exports.MoveDescriptor = MoveDescriptor


/**
 * Whether the given object is a {@link MoveDescriptor} or not.
 *
 * @param {Object} obj
 * @returns {boolean}
 */
exports.isMoveDescriptor = function(obj) {
	return obj instanceof MoveDescriptor;
};



































