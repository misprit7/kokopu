declare module "basetypes" {
    export var WHITE: number;
    export var BLACK: number;
    export var KING: number;
    export var QUEEN: number;
    export var ROOK: number;
    export var BISHOP: number;
    export var KNIGHT: number;
    export var PAWN: number;
    export var WK: number;
    export var BK: number;
    export var WQ: number;
    export var BQ: number;
    export var WR: number;
    export var BR: number;
    export var WB: number;
    export var BB: number;
    export var WN: number;
    export var BN: number;
    export var WP: number;
    export var BP: number;
    export var EMPTY: number;
    export var INVALID: number;
    export var WHITE_WINS: number;
    export var BLACK_WINS: number;
    export var DRAW: number;
    export var LINE: number;
    export var REGULAR_CHESS: number;
    export var CHESS960: number;
    export var NO_KING: number;
    export var WHITE_KING_ONLY: number;
    export var BLACK_KING_ONLY: number;
    export function colorToString(color: any): string;
    export function pieceToString(piece: any): string;
    export function rankToString(rank: any): string;
    export function fileToString(file: any): string;
    export function resultToString(result: any): string;
    export function variantToString(variant: any): string;
    export function colorFromString(color: any): number;
    export function pieceFromString(piece: any): number;
    export function rankFromString(rank: any): number;
    export function fileFromString(file: any): number;
    export function resultFromString(result: any): number;
    export function variantFromString(variant: any): number;
    export function figurineFromString(piece: any, color: any): string;
    export function squareToString(square: any): string;
    export function squareFromString(square: any): number;
    export function squareToBoardOffset(square: any): number;
    export function boardOffsetToSquare(off: any): number;
    export function boardOffsetToFile(off: any): string | -1;
    export function boardOffsetToRank(off: any): string | -1;
    export function coloredPieceToString(cp: any): string;
    export function coloredPieceFromString(cp: any): number;
    /**
     * Either `'w'` (white) or `'b'` (black).
     */
    export type Color = string;
    /**
     * One-character string identifying a type of piece: `'p'` (pawn), `'n'`, `'b'`, `'r'`, `'q'` or `'k'`.
     */
    export type Piece = string;
    /**
     * Two-character string identifying a colored piece: `'wk'` (white king), `'br'` (black rook), etc...
     */
    export type ColoredPiece = string;
    /**
     * `'-'` Symbol used to identify an empty square.
     */
    export type Empty = string;
    /**
     * Either a one-character string among `'a'`, `'b'`, ..., `'h'` (indicating the file on which *en-passant* is allowed),
     * or `'-'` (indicating that *en-passant* is not allowed).
     */
    export type EnPassantFlag = string;
    /**
     * Two-character string identifying a castle: `'wq'` (white queen-side castle), `'wk'`, `'bq'` or `'bk'`.
     */
    export type Castle = string;
    /**
     * Two-character string identifying a castle with the Chess960 rules: `'wa'` (white castle with rook initially on the a-file),
     * `'wb'`, `'wc'`, ..., `'bh'`.
     */
    export type Castle960 = string;
    /**
     * Two-character string identifying a square: `'a1'`, `'a2'`, ..., `'h8'`.
     */
    export type Square = string;
    /**
     * Result of a chess game. Must be one of the following constant:
     *  - `'1-0'` (white wins),
     *  - `'1/2-1/2'` (draw),
     *  - `'0-1'` (black wins),
     *  - `'*'` (unfinished game, or undefined result).
     */
    export type GameResult = string;
    /**
     * Variant of chess. Must be one of the following constant:
     *  - `'regular'` (regular chess rules),
     *  - `'chess960'` ([Chess960](https://en.wikipedia.org/wiki/Chess960), also known as Fischer Random Chess).
     *  - `'no-king'` (chess position without any king)
     *  - `'white-king-only'` (chess position with no black king)
     *  - `'black-king-only'` (chess position with no white king)
     *
     * Variants `'no-king'`, `'white-king-only'` and `'black-king-only'` do not correspond to "real" games. They are mainly provided
     * to create games explaining a particular piece scheme, concept, or sequence of moves... with a reduced number of pieces.
     */
    export type GameVariant = string;
}
declare module "database" {
    /**
     * @class
     * @classdesc Describe a set of chess games (see also {@link Game}).
     *
     * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
     *              are allowed to instantiate {@link Database} objects.
     */
    export class Database {
        constructor(impl: any, gameCountGetter: any, gameGetter: any);
        _impl: any;
        _gameCountGetter: any;
        _gameGetter: any;
        /**
         * Number of games in the database.
         *
         * @returns {number}
         */
        gameCount(): number;
        game(index: any): any;
        /**
         * Return the errors generated when creating the database.
         */
        errors(): any;
    }
}
declare module "exception" {
    /**
     * @module exception
     * @description This module defines the exceptions used by the library.
     */
    /**
     * @class
     * @classdesc Exception thrown when an invalid argument is passed to a function.
     * @static
     */
    export class IllegalArgument {
        constructor(functionName: any);
        /**
         * Name of the function that raises the exception.
         * @member {string}
         */
        functionName: any;
        toString(): string;
    }
    /**
     * @class
     * @classdesc Exception thrown by the FEN parsing functions.
     * @static
     */
    export class InvalidFEN {
        constructor(fen: any, message: any, ...args: any[]);
        /**
         * FEN string that causes the error.
         * @member {string}
         */
        fen: any;
        /**
         * Human-readable message describing the error.
         * @member {string}
         */
        message: any;
        toString(): string;
    }
    /**
     * @class
     * @classdesc Exception thrown by the move notation parsing functions.
     * @static
     */
    export class InvalidNotation {
        constructor(fen: any, notation: any, message: any, ...args: any[]);
        /**
         * FEN representation of the position used to interpret the move notation.
         * @member {string}
         */
        fen: any;
        /**
         * Move notation that causes the error.
         * @member {string}
         */
        notation: any;
        /**
         * Human-readable message describing the error.
         * @member {string}
         */
        message: any;
        toString(): string;
    }
    /**
     * @class
     * @classdesc Exception thrown by the PGN parsing functions.
     * @static
     */
    export class InvalidPGN {
        constructor(pgn: any, index: any, lineNumber: any, message: any, ...args: any[]);
        /**
         * PGN string that causes the error.
         * @member {string}
         */
        pgn: any;
        /**
         * Index of the character in the PGN string where the parsing fails (or a negative value is no particular character is related to the error).
         * @member {number}
         */
        index: any;
        /**
         * Current line number
         */
        lineNumber: any;
        /**
         * Human-readable message describing the error.
         * @member {string}
         */
        message: any;
        toString(): string;
    }
    /**
     * @class
     * @classdesc Exception thrown by the JSON parsing functions.
     * @static
     */
    export class InvalidJSON {
        constructor(json: any, index: any, message: any, ...args: any[]);
        /**
         * JSON string that causes the error.
         * @member {string}
         */
        json: any;
        /**
         * Index of the character in the JSON string where the parsing fails (or a negative value is no particular character is related to the error).
         * @member {number}
         */
        index: any;
        /**
         * Human-readable message describing the error.
         * @member {string}
         */
        message: any;
        toString(): string;
    }
}
declare module "i18n" {
    export var ORDINALS: string[];
    export var WRONG_NUMBER_OF_FEN_FIELDS: string;
    export var WRONG_NUMBER_OF_SUBFIELDS_IN_BOARD_FIELD: string;
    export var UNEXPECTED_CHARACTER_IN_BOARD_FIELD: string;
    export var UNEXPECTED_END_OF_SUBFIELD_IN_BOARD_FIELD: string;
    export var INVALID_TURN_FIELD: string;
    export var INVALID_CASTLING_FIELD: string;
    export var INVALID_EN_PASSANT_FIELD: string;
    export var WRONG_RANK_IN_EN_PASSANT_FIELD: string;
    export var INVALID_MOVE_COUNTING_FIELD: string;
    export var INVALID_MOVE_NOTATION_SYNTAX: string;
    export var ILLEGAL_POSITION: string;
    export var ILLEGAL_NO_KING_CASTLING: string;
    export var ILLEGAL_QUEEN_SIDE_CASTLING: string;
    export var ILLEGAL_KING_SIDE_CASTLING: string;
    export var NO_PIECE_CAN_MOVE_TO: string;
    export var NO_PIECE_CAN_MOVE_TO_DISAMBIGUATION: string;
    export var REQUIRE_DISAMBIGUATION: string;
    export var WRONG_DISAMBIGUATION_SYMBOL: string;
    export var TRYING_TO_CAPTURE_YOUR_OWN_PIECES: string;
    export var INVALID_CAPTURING_PAWN_MOVE: string;
    export var INVALID_NON_CAPTURING_PAWN_MOVE: string;
    export var NOT_SAFE_FOR_WHITE_KING: string;
    export var NOT_SAFE_FOR_BLACK_KING: string;
    export var MISSING_PROMOTION: string;
    export var MISSING_PROMOTION_SYMBOL: string;
    export var INVALID_PROMOTED_PIECE: string;
    export var ILLEGAL_PROMOTION: string;
    export var ILLEGAL_NULL_MOVE: string;
    export var MISSING_CAPTURE_SYMBOL: string;
    export var INVALID_CAPTURE_SYMBOL: string;
    export var WRONG_CHECK_CHECKMATE_SYMBOL: string;
    export var INVALID_PGN_TOKEN: string;
    export var INVALID_MOVE_IN_PGN_TEXT: string;
    export var INVALID_FEN_IN_PGN_TEXT: string;
    export var UNEXPECTED_PGN_HEADER: string;
    export var UNEXPECTED_BEGIN_OF_VARIATION: string;
    export var UNEXPECTED_END_OF_VARIATION: string;
    export var UNEXPECTED_END_OF_GAME: string;
    export var UNEXPECTED_END_OF_TEXT: string;
    export var INVALID_GAME_INDEX: string;
    export var UNKNOWN_VARIANT: string;
    export var VARIANT_WITHOUT_FEN: string;
    export var INVALID_JSON: string;
    export var INVALID_JSON_FIELD: string;
    export var UNKNOWN_EXTENSION_FIELD: string;
}
declare module "movedescriptor" {
    export function make(from: any, to: any, color: any, movingPiece: any, capturedPiece: any): MoveDescriptor;
    export function makeCastling(from: any, to: any, rookFrom: any, rookTo: any, color: any): MoveDescriptor;
    export function makeEnPassant(from: any, to: any, enPassantSquare: any, color: any): MoveDescriptor;
    export function makePromotion(from: any, to: any, color: any, promotion: any, capturedPiece: any): MoveDescriptor;
    export function isMoveDescriptor(obj: any): boolean;
    /**
     * @class
     * @classdesc Describe a legal chess move, with its characteristics.
     *
     * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
     *              are allowed to instantiate {@link MoveDescriptor} objects.
     */
    export class MoveDescriptor {
        constructor(flags: any, from: any, to: any, movingPiece: any, finalPiece: any, optionalPiece: any, optionalSquare1: any, optionalSquare2: any);
        _type: any;
        _from: any;
        _to: any;
        _movingPiece: any;
        _finalPiece: any;
        _optionalPiece: any;
        _optionalSquare1: any;
        _optionalSquare2: any;
        toString(): string;
        toUCIString(): string;
        /**
         * Whether or not the current move is a castling move.
         *
         * @returns {boolean}
         */
        isCastling(): boolean;
        /**
         * Whether or not the current move is a *en-passant* move.
         *
         * @returns {boolean}
         */
        isEnPassant(): boolean;
        /**
         * Whether or not the current move is a capture (either a regular capture or a *en-passant* capture).
         *
         * @returns {boolean}
         */
        isCapture(): boolean;
        /**
         * Whether or not the current move is a promotion.
         *
         * @returns {boolean}
         */
        isPromotion(): boolean;
        /**
         * Origin square of the moving piece. In case of castling, this is the origin square of the king.
         *
         * @returns {Square}
         */
        from(): any;
        /**
         * Destination square of the moving piece. In case of castling, this is the destination square of the king.
         *
         * @returns {Square}
         */
        to(): any;
        /**
         * Color of the moving piece.
         *
         * @returns {Color}
         */
        color(): any;
        /**
         * Type of the moving piece. In case of castling, the moving piece is considered to be the king.
         *
         * @returns {Piece}
         */
        movingPiece(): any;
        /**
         * Color and type of the moving piece. In case of castling, the moving piece is considered to be the king.
         *
         * @returns {ColoredPiece}
         */
        movingColoredPiece(): any;
        /**
         * Type of the captured piece.
         *
         * @returns {Piece}
         * @throws {module:exception.IllegalArgument} If the current move is not a capture (see {@link MoveDescriptor#isCapture}).
         */
        capturedPiece(): any;
        /**
         * Color and type of the captured piece.
         *
         * @returns {ColoredPiece}
         * @throws {module:exception.IllegalArgument} If the current move is not a capture (see {@link MoveDescriptor#isCapture}).
         */
        capturedColoredPiece(): any;
        /**
         * Origin square of the rook, in case of a castling move.
         *
         * @returns {Square}
         * @throws {module:exception.IllegalArgument} If the current move is not a castling move (see {@link MoveDescriptor#isCastling}).
         */
        rookFrom(): any;
        /**
         * Destination square of the rook, in case of a castling move.
         *
         * @returns {Square}
         * @throws {module:exception.IllegalArgument} If the current move is not a castling move (see {@link MoveDescriptor#isCastling}).
         */
        rookTo(): any;
        /**
         * Square containing the captured pawn, in case of a *en-passant* move.
         *
         * @returns {Square}
         * @throws {module:exception.IllegalArgument} If the current move is not a *en-passant* move (see {@link MoveDescriptor#isEnPassant}).
         */
        enPassantSquare(): any;
        /**
         * Type of the promoted piece, in case of a promotion.
         *
         * @returns {Piece}
         * @throws {module:exception.IllegalArgument} If the current move is not a promotion (see {@link MoveDescriptor#isPromotion}).
         */
        promotion(): any;
        /**
         * Color and type of the promoted piece, in case of a promotion.
         *
         * @returns {ColoredPiece}
         * @throws {module:exception.IllegalArgument} If the current move is not a promotion (see {@link MoveDescriptor#isPromotion}).
         */
        coloredPromotion(): any;
    }
}
declare module "private_position/impl" {
    export function makeEmpty(variant: any): {
        board: number[];
        turn: number;
        castling: number[];
        enPassant: number;
        variant: any;
        legal: boolean;
        king: number[];
    };
    export function makeInitial(): {
        board: number[];
        turn: number;
        castling: number[];
        enPassant: number;
        variant: number;
        legal: boolean;
        king: number[];
    };
    export function make960FromScharnagl(scharnaglCode: any): {
        board: number[];
        turn: number;
        castling: number[];
        enPassant: number;
        variant: number;
        legal: boolean;
        king: number[];
    };
    export function makeCopy(position: any): {
        board: any;
        turn: any;
        castling: any;
        enPassant: any;
        variant: any;
        legal: any;
        king: any;
    };
}
declare module "private_position/fen" {
    export function ascii(position: any): string;
    export function getFEN(position: any, fiftyMoveClock: any, fullMoveNumber: any): string;
    export function parseFEN(variant: any, fen: any, strict: any): {
        position: {
            board: number[];
            turn: number;
            castling: number[];
            enPassant: number;
            variant: any;
            legal: boolean;
            king: number[];
        };
        fiftyMoveClock: number;
        fullMoveNumber: number;
    };
}
declare module "private_position/attacks" {
    export var ATTACK_DIRECTIONS: number[][];
    export function isAttacked(position: any, square: any, attackerColor: any): boolean;
    export function getAttacks(position: any, square: any, attackerColor: any): any[];
}
declare module "private_position/legality" {
    export function isLegal(position: any): any;
    export function refreshLegalFlagAndKingSquares(position: any): void;
}
declare module "private_position/movegeneration" {
    export function isCheck(position: any): boolean;
    export function isCheckmate(position: any): boolean;
    export function isStalemate(position: any): boolean;
    export function hasMove(position: any): boolean;
    export function moves(position: any): any[];
    export function isKingSafeAfterMove(position: any, from: any, to: any, enPassantSquare: number): boolean | any;
    export function isCastlingLegal(position: any, from: any, to: any): false | moveDescriptor.MoveDescriptor;
    export function isMoveLegal(position: any, from: any, to: any): any;
    export function play(position: any, descriptor: any): void;
    export function isNullMoveLegal(position: any): boolean;
    export function playNullMove(position: any): boolean;
    import moveDescriptor = require("movedescriptor");
}
declare module "private_position/notation" {
    export function getNotation(position: any, descriptor: any): string;
    export function getFigurineNotation(position: any, descriptor: any): any;
    export function getUciNotation(descriptor: any): string;
    export function parseNotation(position: any, notation: any, strict: any): any;
}
declare module "position" {
    /**
     * @class
     * @classdesc Represent a chess position, i.e. the state of a 64-square chessboard with a few additional
     *            information (who is about to play, castling rights, en-passant rights).
     *
     * @description
     * This constructor can be invoked with different types of arguments:
     * ```
     * new kokopu.Position('regular');                  //  1 -> Usual starting position.
     * new kokopu.Position('regular', 'start');         //  2 -> Same as 1.
     * new kokopu.Position('regular', 'empty');         //  3 -> Empty board.
     * new kokopu.Position('no-king', 'empty');         //  4 -> Empty board, configured to be considered as legal without any king.
     * new kokopu.Position('white-king-only', 'empty'); //  5 -> Empty board, configured to be considered as legal with no black king.
     * new kokopu.Position('black-king-only', 'empty'); //  6 -> Empty board, configured to be considered as legal with no white king.
     * new kokopu.Position('chess960', 'empty');        //  7 -> Empty board, configured for Chess960.
     * new kokopu.Position('chess960', scharnaglCode);  //  8 -> One of the Chess960 starting position (`scharnaglCode` is a number between 0 and 959 inclusive).
     * new kokopu.Position(variant, fenString);         //  9 -> Parse the given FEN string, assuming the given game variant.
     * new kokopu.Position(anotherPosition);            // 10 -> Make a copy of `anotherPosition`.
     * ```
     * Please note that the argument `'regular'` can be omitted in forms 1, 2, 3. In particular, the constructor can be invoked
     * with no argument, as in `new kokopu.Position()`: in this case, a new `Position` initialized to the usual starting position
     * is instantiated (as in forms 1 and 2).
     *
     * In form 9, `variant` must be one of the game variant proposed in {@link GameVariant}. The `variant` argument can be omitted,
     * as in `new kokopu.Position(fenString)`: in this case, the usual chess rules are assumed (as if `variant` where set to `'regular'`).
     * If `variant` is set to `'chess960'`, then the X-FEN syntax can be used for `fenString'`.
     *
     * In form 10, `anotherPosition` must be another {@link Position} object.
     *
     * @throws {module:exception.InvalidFEN} If the input parameter is not a valid FEN string (can be thrown only in cases 6 and 7).
     *
     * @see FEN notation: {@link https://en.wikipedia.org/wiki/Forsyth–Edwards_Notation}
     * @see Chess960 (aka. Fischer Random Chess): {@link https://en.wikipedia.org/wiki/Chess960}
     * @see Chess960 starting positions: {@link https://chess960.net/start-positions/}
     * @see X-FEN notation: {@link https://en.wikipedia.org/wiki/X-FEN}
     */
    export class Position {
        constructor(...args: any[]);
        _impl: {
            board: any;
            turn: any;
            castling: any;
            enPassant: any;
            variant: any;
            legal: any;
            king: any;
        };
        /**
         * Set the position to the empty state.
         *
         * @param {GameVariant} [variant=`'regular'`] Chess game variant to use.
         */
        clear(variant?: any, ...args: any[]): void;
        /**
         * Set the position to the starting state.
         */
        reset(): void;
        /**
         * Set the position to one of the Chess960 starting position.
         *
         * @param {number} scharnaglCode Must be between 0 and 959 inclusive (see {@link https://chess960.net/start-positions/}
         *        or {@link https://chessprogramming.wikispaces.com/Reinhard+Scharnagl} for more details).
         */
        reset960(scharnaglCode: number): void;
        /**
         * Return a human-readable string representing the position. This string is multi-line,
         * and is intended to be displayed in a fixed-width font (similarly to an ASCII-art picture).
         *
         * @returns {string} Human-readable representation of the position.
         */
        ascii(): string;
        /**
         * Get the FEN representation of the current {@link Position}).
         *
         * @param {{fiftyMoveClock:number, fullMoveNumber:number}} [options] If not provided the `fiftyMoveClock`
         *        and the `fullMoveNumber` fields of the returned FEN string are set respectively to 0 and 1.
         *
         */ /**
       *
       * Parse the given FEN string and set the position accordingly.
       *
       * @param {string} fen
       * @param {boolean} [strict=false] If `true`, only perfectly formatted FEN strings are accepted.
       * @returns {{fiftyMoveClock:number, fullMoveNumber:number}}
       * @throws {module:exception.InvalidFEN} If the given string cannot be parsed as a valid FEN string.
       */
        fen(...args: any[]): {
            fiftyMoveClock: number;
            fullMoveNumber: number;
        };
        /**
         * Get the {@link GameVariant} in use.
         *
         * @returns {GameVariant}
         */
        variant(): any;
        /**
         * Get the content of a square.
         *
         * @param {Square} square
         * @returns {ColoredPiece|Empty}
         *
         */ /**
       *
       * Set the content of a square.
       *
       * @param {Square} square
       * @param {ColoredPiece|Empty} value
       */
        square(square: any, value: any | any, ...args: any[]): string;
        /**
         * Get the turn flag (i.e. who is about to play).
         *
         * @returns {Color}
         *
         */ /**
       *
       * Set the turn flag (i.e. who is about to play).
       *
       * @param {Color} value
       */
        turn(value: any, ...args: any[]): string;
        /**
         * Get a castle flag (i.e. whether or not the corresponding castle is allowed or not).
         *
         * @param {Castle|Castle960} castle Must be {@link Castle960} if the {@link Position} is configured for Chess960, or {@link Castle} otherwise.
         * @returns {boolean}
         *
         */ /**
       *
       * Set a castle flag (i.e. whether or not the corresponding castle is allowed or not).
       *
       * @param {Castle|Castle960} castle Must be {@link Castle960} if the {@link Position} is configured for Chess960, or {@link Castle} otherwise.
       * @param {boolean} value
       */
        castling(castle: any | any, value: boolean, ...args: any[]): boolean;
        /**
         * Get the *en-passant* flag (i.e. the file on which *en-passant* is allowed, if any).
         *
         * @returns {EnPassantFlag}
         *
         */ /**
       *
       * Set the *en-passant* flag (i.e. the file on which *en-passant* is allowed, if any).
       *
       * @param {EnPassantFlag} value
       */
        enPassant(value: any, ...args: any[]): string;
        /**
         * Check if any piece of the given color attacks a given square.
         *
         * @param {Square} square
         * @param {Color} byWho
         * @returns {boolean}
         */
        isAttacked(square: any, byWho: any): boolean;
        /**
         * Return the squares from which a piece of the given color attacks a given square.
         *
         * @param {Square} square
         * @param {Color} byWho
         * @returns {Square[]}
         */
        getAttacks(square: any, byWho: any): any[];
        /**
         * Check whether the current position is legal or not.
         *
         * A position is considered to be legal if all the following conditions are met:
         *
         *  1. There is exactly one white king and one black king on the board.
         *  2. The player that is not about to play is not in check.
         *  3. There are no pawn on ranks 1 and 8.
         *  4. For each colored castle flag set, there is a rook and a king on the
         *     corresponding initial squares.
         *  5. The pawn situation is consistent with the *en-passant* flag if it is set.
         *     For instance, if it is set to the "e" file and black is about to play,
         *     the squares e2 and e3 must be empty, and there must be a white pawn on e4.
         *
         * @returns {boolean}
         */
        isLegal(): boolean;
        /**
         * Return the square on which is located the king of the given color.
         *
         * @param {Color} color
         * @returns {Square|boolean} Square where is located the searched king. `false` is returned
         *          if there is no king of the given color, or if the are 2 such kings or more.
         */
        kingSquare(color: any): any | boolean;
        /**
         * Return `true` if the player that is about to play is in check. If the position is not legal (see {@link Position#isLegal}),
         * the returned value is always `false`.
         *
         * @returns {boolean}
         */
        isCheck(): boolean;
        /**
         * Return `true` if the player that is about to play is checkmated. If the position is not legal (see {@link Position#isLegal}),
         * the returned value is always `false`.
         *
         * @returns {boolean}
         */
        isCheckmate(): boolean;
        /**
         * Return `true` if the player that is about to play is stalemated. If the position is not legal (see {@link Position#isLegal}),
         * the returned value is always `false`.
         *
         * @returns {boolean}
         */
        isStalemate(): boolean;
        /**
         * Whether at least one legal move exists in the current position or not. If the position is not legal (see {@link Position#isLegal}),
         * the returned value is always `false`.
         *
         * @returns {boolean}
         */
        hasMove(): boolean;
        /**
         * Return the list of all legal moves in the current position. An empty list is returned if the position itself is not legal
         * (see {@link Position#isLegal}).
         *
         * @returns {MoveDescriptor[]}
         */
        moves(): any[];
        /**
         * Check whether a move is legal or not, and return the corresponding {@link MoveDescriptor} if it is legal.
         *
         * Depending on the situation, the method returns:
         *   - `false` if it is not possible to move from `from` to `to` (either because the move itself is not legal, or because the underlying
         *     position is not legal).
         *   - a function that returns a {@link MoveDescriptor} otherwise. When there is only one possible move between the given squares
         *     `from` and `to` (i.e. in most cases), this function must be invoked with no argument. When there is a "move ambiguity"
         *     (i.e. squares `from` and `to` are not sufficient to fully describe a move), an argument must be passed to the this function
         *     in order to discriminate between the possible moves. A field `status` is added to the function in order to indicate whether
         *     there is a move ambiguity or not.
         *
         * A code interpreting the result returned by {@link Position#isMoveLegal} would typically look like this:
         *
         * ```
         * var result = position.isMoveLegal(from, to);
         * if(!result) {
         *   // The move "from -> to" is not legal.
         * }
         * else {
         *   switch(result.status) {
         *
         *     case 'regular':
         *       // The move "from -> to" is legal, and the corresponding move descriptor is `result()`.
         *       break;
         *
         *     case 'promotion':
         *       // The move "from -> to" is legal, but it corresponds to a promotion,
         *       // so the promoted piece must be specified. The corresponding move descriptors
         *       // are `result('q')`, `result('r')`, `result('b')` and `result('n')`.
         *       break;
         *
         *     case 'castle960':
         *       // The move "from -> to" is legal, but it corresponds either to a castling move
         *       // or to a regular king move (this case can only happen at Chess960).
         *       // The corresponding move descriptors are `result('castle')` and `result('king')`.
         *       break;
         *
         *     default:
         *       // This case is not supposed to happen.
         *       break;
         *   }
         * }
         * ```
         *
         * @param {Square} from
         * @param {Square} to
         * @returns {boolean|function}
         */
        isMoveLegal(from: any, to: any): boolean | Function;
        /**
         * Play the given move if it is legal.
         *
         * WARNING: when a {@link MoveDescriptor} is passed to this method, this {@link MoveDescriptor} must have been issued by one of the
         * {@link Position#moves} / {@link Position#isMoveLegal} / {@link Position#notation} methods of the current {@link Position}.
         * Trying to invoke {@link Position#play} with a {@link MoveDescriptor} generated by another {@link Position} object would result
         * in an undefined behavior.
         *
         * @param {string|MoveDescriptor} move
         * @returns {boolean} `true` if the move has been played, `false` if the move is not legal or if the string passed to the method
         *          cannot be interpreted as a valid SAN move notation (see {@link Position#notation}).
         */
        play(move: string | any): boolean;
        /**
         * Determine whether a null-move (i.e. switching the player about to play) can be play in the current position.
         *
         * A null-move is possible if the position is legal and if the current player about to play is not in check.
         *
         * @returns {boolean}
         */
        isNullMoveLegal(): boolean;
        /**
         * Play a null-move on the current position if it is legal.
         *
         * @returns {boolean} `true` if the move has actually been played, `false` otherwise.
         */
        playNullMove(): boolean;
        /**
         * Return the standard algebraic notation corresponding to the given move descriptor.
         *
         * @param {MoveDescriptor} moveDescriptor
         * @returns {string}
         *
         */ /**
       *
       * Parse the given string as standard algebraic notation or uci move notation (long algebraic notation)
       * and return the corresponding move descriptor.
       *
       * @param {string} move
       * @param {boolean} [strict=false] If `true`, only perfectly formatted SAN moves are accepted. If `false`, "small errors" in the input
       *        such as a missing capture character, an unnecessary disambiguation symbol... do not interrupt the parsing.
       * @returns {MoveDescriptor}
       * @throws {module:exception.InvalidNotation} If the move parsing fails or if the parsed move would correspond to an illegal move.
       */
        notation(...args: any[]): any;
        /**
         * Return the Figurine Algebraic Notation for the move descriptor.
         *
         * @param {MoveDescriptor} moveDescriptor
         * @returns {string}
         */
        figurineNotation(...args: any[]): string;
        /**
         * Return the UCI Notation for the move descriptor.
         *
         * @param {MoveDescriptor} moveDescriptor
         * @returns {string}
         */
        uciNotation(...args: any[]): string;
    }
}
declare module "game" {
    export class Game {
        /**
         * Get the player name.
         *
         * @param {Color} color
         * @returns {string?}
         *
         */ /**
        *
        * Set the player name.
        *
        * @param {Color} color
        * @param {string?} value
        */
        playerName(color: any, value: string | null, ...args: any[]): any;
        /**
         * Get the player elo.
         *
         * @param {Color} color
         * @returns {string?}
         *
         */ /**
        *
        * Set the player elo.
        *
        * @param {Color} color
        * @param {string?} value
        */
        playerElo(color: any, value: string | null, ...args: any[]): any;
        /**
         * Get the player title.
         *
         * @param {Color} color
         * @returns {string?}
         *
         */ /**
        *
        * Set the player title.
        *
        * @param {Color} color
        * @param {string?} value
        */
        playerTitle(color: any, value: string | null, ...args: any[]): any;
        /**
         * Get the event.
         *
         * @returns {string?}
         *
         */ /**
        *
        * Set the event.
        *
        * @param {string?} value
        */
        event(value: string | null, ...args: any[]): string;
        _event: string;
        /**
         * Get the round.
         *
         * @returns {string?}
         *
         */ /**
        *
        * Set the round.
        *
        * @param {string?} value
        */
        round(value: string | null, ...args: any[]): string;
        _round: string;
        /**
         * Get the date of the game.
         *
         * @returns {Date|{year:number, month:number}|{year:number}|undefined} Depending on what is defined, the method returns
         *          the whole date, or just the year and the month, or just the year, or `undefined`.
         *
         */ /**
        *
        * Set the date of the game.
        *
        * @param {Date|{year:number, month:number}|{year:number}|undefined} value
        */
        date(value: Date | {
            year: number;
            month: number;
        } | {
            year: number;
        } | undefined, ...args: any[]): Date | {
            year: number;
            month: any;
        } | {
            year: number;
            month?: undefined;
        };
        _date: Date | {
            year: number;
            month: any;
        } | {
            year: number;
            month?: undefined;
        };
        /**
         * Get where the game takes place.
         *
         * @returns {string?}
         *
         */ /**
        *
        * Set where the game takes place.
        *
        * @param {string?} value
        */
        site(value: string | null, ...args: any[]): string;
        _site: string;
        /**
         * Get the name of the annotator.
         *
         * @returns {string?}
         *
         */ /**
        *
        * Set the name of the annotator.
        *
        * @param {string?} value
        */
        annotator(value: string | null, ...args: any[]): string;
        _annotator: string;
        /**
         * Get the result of the game.
         *
         * @returns {GameResult}
         *
         */ /**
        *
        * Set the result of the game.
        *
        * @param {GameResult} value
        */
        result(value: any, ...args: any[]): string;
        _result: number;
        /**
         * Get the {@link GameVariant} of the game.
         *
         * @returns {GameVariant}
         */
        variant(): any;
        /**
         * Get/set additional game headers not supported directly
         *
         * @param {string} key
         * @param {string} value
         */
        additionalHeaders(key: string, value: string, ...args: any[]): any;
        /**
         * Get the initial position of the game.
         *
         * @returns {Position}
         *
         */ /**
        *
        * Set the initial position of the game.
        *
        * WARNING: this resets the main variation.
        *
        * @param {Position} initialPosition
        * @param {number} [fullMoveNumber=1]
        */
        initialPosition(initialPosition: Position, fullMoveNumber?: number, ...args: any[]): Position;
        _initialPosition: Position;
        _fullMoveNumber: number;
        _mainVariationInfo: any;
        /**
         * The main variation of the game.
         *
         * @returns {Variation}
         */
        mainVariation(): Variation;
    }
    import Position_1 = require("position");
    import Position = Position_1.Position;
    /**
     * @class
     * @classdesc Represent one variation in the tree structure formed by a chess game, meaning
     * a starting chess position and list of played consecutively from this position.
     *
     * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
     *              are allowed to instantiate {@link Variation} objects.
     */
    function Variation(info: any, initialFullMoveNumber: any, initialPosition: any, withinLongVariation: any): void;
    class Variation {
        /**
         * @class
         * @classdesc Represent one variation in the tree structure formed by a chess game, meaning
         * a starting chess position and list of played consecutively from this position.
         *
         * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
         *              are allowed to instantiate {@link Variation} objects.
         */
        constructor(info: any, initialFullMoveNumber: any, initialPosition: any, withinLongVariation: any);
        _info: any;
        _initialFullMoveNumber: any;
        _initialPosition: any;
        _withinLongVariation: any;
        /**
         * Whether the current variation is considered as a "long" variation, i.e. a variation that
         * should be displayed in an isolated block.
         *
         * @returns {boolean}
         */
        isLongVariation(): boolean;
        /**
         * Chess position at the beginning of the variation.
         *
         * @returns {Position}
         */
        initialPosition(): Position;
        /**
         * Full-move number at the beginning of the variation.
         *
         * @returns {number}
         */
        initialFullMoveNumber(): number;
        /**
         * First move of the variation.
         *
         * @returns {Node?} `undefined` if the variation is empty.
         */
        first(): Node | null;
        /**
         * Generate the nodes corresponding to the moves of the current variation.
         *
         * @returns {Node[]} An empty array is returned if the variation is empty.
         */
        nodes(): Node[];
        /**
         * Return the NAGs associated to the current variation.
         *
         * @returns {number[]}
         * @function
         */
        nags: any;
        /**
         * Check whether the current variation has the given NAG or not.
         *
         * @param {number} nag
         * @returns {boolean}
         * @function
         */
        hasNag: any;
        /**
         * Add the given NAG to the current variation.
         *
         * @param {number} nag
         * @function
         */
        addNag: any;
        /**
         * Remove the given NAG from the current variation.
         *
         * @param {number} nag
         * @function
         */
        removeNag: any;
        /**
         * Return the keys of the tags associated to the current variation.
         *
         * @returns {string[]}
         * @function
         */
        tags: any;
        /**
         * Get the value associated to the given tag key on the current variation.
         *
         * @param {string} tagKey
         * @returns {string?} `undefined` if no value is associated to this tag key on the current variation.
         * @function
         *
         */ /**
        *
        * Set the value associated to the given tag key on the current variation.
        *
        * @param {string} tagKey
        * @param {string?} value
        * @function
        */
        tag: any;
        /**
         * Get the text comment associated to the current variation.
         *
         * @returns {string?} `undefined` if no comment is defined for the variation.
         * @function
         *
         */ /**
        *
        * Set the text comment associated to the current variation.
        *
        * @param {string} value
        * @param {boolean} [isLongComment=false]
        * @function
        */
        comment: any;
        /**
         * Whether the text comment associated to the current variation is long or short.
         *
         * @returns {boolean}
         */
        isLongComment(): boolean;
        /**
         * Play the given move as the first move of the variation.
         *
         * @param {string} move SAN notation (or `'--'` for a null-move).
         * @returns {Node} A new node object, to represents the new move.
         * @throws {module:exception.InvalidNotation} If the move notation cannot be parsed.
         */
        play(move: string): Node;
    }
    /**
     * @class
     * @classdesc Represent one move in the tree structure formed by a chess game with multiple variations.
     *
     * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
     *              are allowed to instantiate {@link Node} objects.
     */
    function Node(info: any, parentVariation: any, fullMoveNumber: any, positionBefore: any): void;
    class Node {
        /**
         * @class
         * @classdesc Represent one move in the tree structure formed by a chess game with multiple variations.
         *
         * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
         *              are allowed to instantiate {@link Node} objects.
         */
        constructor(info: any, parentVariation: any, fullMoveNumber: any, positionBefore: any);
        _info: any;
        _parentVariation: any;
        _fullMoveNumber: any;
        _positionBefore: any;
        /**
         * SAN representation of the move associated to the current node.
         *
         * @returns {string}
         */
        notation(): string;
        /**
         * Figuration Algebraic Notation representation of the move associated with the current node.
         *
         * @returns {string} with UNICODE for pieces
         */
        figurineNotation(): string;
        /**
         * UCI Notation representation of the move associated with the current node.
         *
         * @returns {string} with UCI move
         */
        uci(): string;
        /**
         * Chess position before the current move.
         *
         * @returns {Position}
         */
        positionBefore(): Position;
        /**
         * Chess position obtained after the current move.
         *
         * @returns {Position}
         */
        position(): Position;
        /**
         * Full-move number. It starts at 1, and is incremented after each black move.
         *
         * @returns {number}
         */
        fullMoveNumber(): number;
        /**
         * Color the side corresponding to the current move.
         *
         * @returns {Color}
         */
        moveColor(): any;
        /**
         * Go to the next move within the same variation.
         *
         * @returns {Node?} `undefined` if the current move is the last move of the variation, or a node corresponding to the next move otherwise.
         */
        next(): Node | null;
        /**
         * Return the variations that can be followed instead of the current move.
         *
         * @returns {Variation[]}
         */
        variations(): Variation[];
        /**
         * Return the NAGs associated to the current move.
         *
         * @returns {number[]}
         */
        nags(): number[];
        /**
         * Check whether the current move has the given NAG or not.
         *
         * @param {number} nag
         * @returns {boolean}
         */
        hasNag(nag: number): boolean;
        /**
         * Add the given NAG to the current move.
         *
         * @param {number} nag
         */
        addNag(nag: number): void;
        /**
         * Remove the given NAG from the current move.
         *
         * @param {number} nag
         */
        removeNag(nag: number): void;
        /**
         * Return the keys of the tags associated to the current move.
         *
         * @returns {string[]}
         */
        tags(): string[];
        /**
         * Get the value associated to the given tag key on the current move.
         *
         * @param {string} tagKey
         * @returns {string?} `undefined` if no value is associated to this tag key on the current move.
         *
         */ /**
        *
        * Set the value associated to the given tag key on the current move.
        *
        * @param {string} tagKey
        * @param {string?} value
        */
        tag(tagKey: string, value: string | null, ...args: any[]): any;
        /**
         * Get the text comment associated to the current move.
         *
         * @returns {string?} `undefined` if no comment is defined for the move.
         *
         */ /**
        *
        * Set the text comment associated to the current move.
        *
        * @param {string} value
        * @param {boolean} [isLongComment=false]
        */
        comment(value: string, isLongComment?: boolean, ...args: any[]): any;
        /**
         * Whether the text comment associated to the current move is long or short.
         *
         * @returns {boolean}
         */
        isLongComment(): boolean;
        /**
         * Play the given move, and return a new {@link Node} pointing at the resulting position.
         *
         * @param {string} move SAN notation (or `'--'` for a null-move).
         * @returns {Node} A new node, pointing at the new position.
         * @throws {module:exception.InvalidNotation} If the move notation cannot be parsed.
         */
        play(move: string): Node;
        /**
         * Create a new variation that can be played instead of the current move.
         *
         * @param {boolean} isLongVariation
         * @returns {Variation}
         */
        addVariation(isLongVariation: boolean): Variation;
    }
    export {};
}
declare module "json" {
    export function jsonEncode(obj: Database | Game, gameIndex: number, ...args: any[]): any[];
    export function jsonDecode(jsonString: string, gameIndex: number, ...args: any[]): Game;
    import Database_1 = require("database");
    import Database = Database_1.Database;
    import Game_1 = require("game");
    import Game = Game_1.Game;
}
declare module "private_pgn/tokenstream" {
    /**
     * @class
     * @classdesc Stream of tokens.
     */
    export class TokenStream {
        constructor(pgnString: any, initialPosition: any);
        _text: any;
        _pos: any;
        _emptyLineFound: boolean;
        _lineCount: number;
        _token: number;
        _tokenValue: any;
        _tokenIndex: number;
        _matchSpaces: RegExp;
        _matchLineBreak: RegExp;
        _matchCommentLineBreak: RegExp;
        _matchHeaderRegular: RegExp;
        _matchHeaderDegenerated: RegExp;
        _matchMove: RegExp;
        _matchNag: RegExp;
        _matchComment: RegExp;
        _matchBeginVariation: RegExp;
        _matchEndVariation: RegExp;
        _matchEndOfGame: RegExp;
        /**
         * Try to consume 1 token.
         *
         * @return {boolean} `true` if a token could have been read, `false` if the end of the text has been reached.
         * @throws {module:exception.InvalidPGN} If the text cannot be interpreted as a valid token.
         */
        consumeToken(): boolean;
        skipToNextGame(): boolean;
        currentPosition(): any;
        emptyLineFound(): boolean;
        token(): number;
        tokenValue(): any;
        tokenIndex(): number;
        invalidPGNException(tokenIndex: any, ...args: any[]): any;
    }
}
declare module "pgn" {
    export function pgnRead(pgnString: string, gameIndex: number, ...args: any[]): Game;
    export function pgnWrite(obj: Database | Game, gameIndex: number, lineLength: number, ...args: any[]): string;
    import Game_2 = require("game");
    import Game = Game_2.Game;
    import Database_2 = require("database");
    import Database = Database_2.Database;
}
declare module "util" {
    export function forEachSquare(callback: (arg0: any) => any): void;
    export function squareColor(square: any): any;
    export function squareToCoordinates(square: any): {
        rank: number;
        file: number;
    };
    export function coordinatesToSquare(file: number, rank: number): any;
}
