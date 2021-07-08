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
