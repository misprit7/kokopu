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
import Position_1 = require("./position");
import Position = Position_1.Position;
/**
 * @class
 * @classdesc Represent one variation in the tree structure formed by a chess game, meaning
 * a starting chess position and list of played consecutively from this position.
 *
 * @description This constructor is not exposed in the public Kokopu API. Only internal objects and functions
 *              are allowed to instantiate {@link Variation} objects.
 */
declare function Variation(info: any, initialFullMoveNumber: any, initialPosition: any, withinLongVariation: any): void;
declare class Variation {
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
declare function Node(info: any, parentVariation: any, fullMoveNumber: any, positionBefore: any): void;
declare class Node {
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
