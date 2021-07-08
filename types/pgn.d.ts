export function pgnRead(pgnString: string, gameIndex: number, ...args: any[]): Game;
export function pgnWrite(obj: Database | Game, gameIndex: number, lineLength: number, ...args: any[]): string;
import Game_1 = require("./game");
import Game = Game_1.Game;
import Database_1 = require("./database");
import Database = Database_1.Database;
