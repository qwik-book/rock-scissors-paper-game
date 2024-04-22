export const gameChoices = {
  rock: {
    img: '/img/rock.png',
    alt: 'Rock Image',
    option: 'r',
  },
  paper: {
    img: '/img/paper.png',
    alt: 'Pape Image',
    option: 'p',
  },
  scissors: {
    img: '/img/scissors.png',
    alt: 'Scissors Image',
    option: 's',
  },
};

export const gameInitialData = {
  data: {
    result: 'Esperando la primera jugada...',
    pointsUser: 0,
    pointsComp: 0,
  },
  imageProperties: {
    width: 100,
    height: 100,
  },
  choices: gameChoices,
};
