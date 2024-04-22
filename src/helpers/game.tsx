import { $ } from "@builder.io/qwik";
import { getRandomInt } from "./random";
import { GameStore } from "~/models/game";

const getComputerChoice = $(async () => {
    const choices = ['r', 'p', 's']; // Roca, Papel, Tijeras
    const randomChoice = getRandomInt(choices.length);
    return choices[randomChoice];
  });

export const gamePlay = $(
  async (userChoice: string, game: GameStore): Promise<void> => {
    const playUserComp = userChoice + (await getComputerChoice());
    console.log(`Jugada en progreso: ${playUserComp}`);
    let playStatus: {
      message: string;
      userAdd: number;
      compAdd: number;
    } = {
      message: '',
      userAdd: 0,
      compAdd: 0,
    };
    switch (playUserComp) {
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: 'Jugada ganada',
          userAdd: 1,
          compAdd: 0,
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        playStatus = {
          message: 'Gana la computadora',
          userAdd: 0,
          compAdd: 1,
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        playStatus = {
          message: 'Empate entre jugador-computadora',
          userAdd: 0,
          compAdd: 0,
        };
        break;
    }

    game.data = {
      ...game.data,
      result: playStatus.message,
      pointsUser: game.data.pointsUser + playStatus.userAdd,
      pointsComp: game.data.pointsComp + playStatus.compAdd,
    };
  }
);
