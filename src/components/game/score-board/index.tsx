import { component$, useContext } from '@builder.io/qwik';
import { Badge } from '~/components/game/badge';
import { CONTEXT_GAME } from '~/routes';

export const ScoreBoard = component$(() => {
  const game = useContext(CONTEXT_GAME);
  return (
    <div class='score-board'>
      <Badge />
      <span id='user-score'>{game.data.pointsUser}</span>:
      <span id='comp-score'>{game.data.pointsComp}</span>
    </div>
  );
});
