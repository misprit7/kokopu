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
