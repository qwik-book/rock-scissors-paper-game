export interface GameStore {
    data: {
      result: string;
      pointsUser: number;
      pointsComp: number;
    };
    imageProperties: {
      width: number;
      height: number;
    }
    choices: {
      rock: {
        img: string;
        alt: string;
        option: string;
      },
      paper: {
        img: string;
        alt: string;
        option: string;
      },
      scissors: {
        img: string;
        alt: string;
        option: string;
      }
    }
  }
  
  export interface GameProps {
    game: GameStore;
  }