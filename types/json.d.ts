export function jsonEncode(obj: Database | Game, gameIndex: number, ...args: any[]): any[];
export function jsonDecode(jsonString: string, gameIndex: number, ...args: any[]): Game;
import Database_1 = require("./database");
import Database = Database_1.Database;
import Game_1 = require("./game");
import Game = Game_1.Game;
