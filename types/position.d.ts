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
