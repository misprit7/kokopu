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
