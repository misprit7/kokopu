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
