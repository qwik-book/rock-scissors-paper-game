import { component$ } from '@builder.io/qwik';
import { GameProps } from '~/models/game';

export const GameStatus = component$((store: GameProps) => {
  const {
    game: {
      data: { result },
    },
  } = store;
  return <p class='info-game'>{result}</p>;
});
