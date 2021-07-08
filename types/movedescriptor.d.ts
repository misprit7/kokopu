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
declare function MoveDescriptor(flags: any, from: any, to: any, movingPiece: any, finalPiece: any, optionalPiece: any, optionalSquare1: any, optionalSquare2: any): void;
declare class MoveDescriptor {
    /**
     * @class
     * @classdesc Describe a legal chess move, with its characteristics.
     *
     * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
     *              are allowed to instantiate {@link MoveDescriptor} objects.
     */
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
export {};
