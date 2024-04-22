import { component$, useContext } from '@builder.io/qwik';
import { gamePlay } from '~/helpers/game';
import { CONTEXT_GAME } from '~/routes';

export const Choices = component$(() => {
  const game = useContext(CONTEXT_GAME);
  const gameChoices = Object.keys(game.choices);
  return (
    <div class='choices'>
      {gameChoices.map((optionKey, index) => {
        const { img, alt, option } = (game.choices as any)[optionKey] as {
          img: string;
          alt: string;
          option: string;
        };
        return (
          <span
            key={'choice_game_' + index}
            class='choice'
            onClick$={() => gamePlay(option, game)}
          >
            <img src={img} width={200} height={200} alt={alt} />
          </span>
        );
      })}
    </div>
  );
});
