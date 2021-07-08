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
