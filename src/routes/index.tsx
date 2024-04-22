import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
  useStyles$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import indexCss from './index.css?inline';

// Game
import { Title, GameStatus, Choices, ScoreBoard } from '~/components';

import { gameInitialData } from '~/constants/game-data';
import { GameStore } from '~/models/game';

export const CONTEXT_GAME = createContextId<GameStore>('game');

export default component$(() => {
  useStyles$(indexCss);
  const game = useStore(gameInitialData);

  useContextProvider(CONTEXT_GAME, game);

  return (
    <>
      <Title />
      <ScoreBoard />
      <GameStatus />
      <Choices />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
