import { component$ } from '@builder.io/qwik';

export const Badge = component$(() => {
  return (
    <>
      <div id='user-label' class='badge'>
        Usu.
      </div>
      <div id='comp-label' class='badge'>
        Comp.
      </div>
    </>
  );
});
