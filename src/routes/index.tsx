import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import indexCss from './index.css?inline';

// Game
import { Title, GameStatus, Choices, ScoreBoard } from '~/components';

import { gameInitialData } from '~/constants/game-data';

export default component$(() => {
  useStyles$(indexCss);
  const game = useStore(gameInitialData);

  return (
    <>
      <Title />
      <ScoreBoard game={game} />
      <GameStatus game={game} />
      <Choices game={game} />
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
