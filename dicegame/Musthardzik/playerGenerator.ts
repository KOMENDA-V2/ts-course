import { Pawn } from "./pawn"


export class PlayerGenerator {
    private static readonly PAWNS_COUNT: number = 10;

    public static generate(): Pawn[] {
        const players: Pawn[] = [];
        for(let i = 0; i < PlayerGenerator.PAWNS_COUNT; i++) {
            let name = "";
            do {
            name = PlayerGenerator.getRandomName();
           } while(players.find(player => player.name === name))
           players.push(new Pawn(name));
        }
        return players;
    }

    private static getRandomName(): string {
        const names: string[] = ["Darth Vader", "Luke Skywalker", "Obi-Wan Kenobi", "General Grievous", "Han Solo", "Yoda", "Padme", "Jar Jar Binks", "Lando Calrissian", "Boba Fett", "Jabba the Hutt", "Qui-Gon Jinn", "Darth Maul", "Ren", "Leia Organa", "C3PO"];
        return names[Math.floor(Math.random() * names.length)];
      }
}