import { component$, useContext } from '@builder.io/qwik';
import { GameProps } from '~/models/game';
import { CONTEXT_GAME } from '~/routes';

export const GameStatus = component$(() => {
  const {data: {result}} = useContext(CONTEXT_GAME);
  return <p class='info-game'>{result}</p>;
});
