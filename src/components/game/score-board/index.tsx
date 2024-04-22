import { component$ } from '@builder.io/qwik';
import { GameProps } from '~/models/game';
import { Badge } from '~/components/game/badge';

export const ScoreBoard = component$<GameProps>((props) => {
  const { game } = props;
  return (
    <div class='score-board'>
      <Badge />
      <span id='user-score'>{game.data.pointsUser}</span>:
      <span id='comp-score'>{game.data.pointsComp}</span>
    </div>
  );
});
