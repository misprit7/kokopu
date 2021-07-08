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
