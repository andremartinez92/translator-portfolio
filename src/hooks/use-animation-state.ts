import { useState } from 'react';

export enum AnimationState {
  OPEN = 'OPEN',
  CLOSING = 'CLOSING',
  CLOSED = 'CLOSED',
}

const { OPEN, CLOSING, CLOSED } = AnimationState;

export const getNextAnimationState = (currentState: AnimationState) => {
  switch (currentState) {
    case OPEN:
      return CLOSING;
    case CLOSED:
      return OPEN;
    case CLOSING:
      return CLOSED;
  }
};

const useAnimationState = (initialState: AnimationState = CLOSED) => {
  const [animationState, setAnimationState] =
    useState<AnimationState>(initialState);

  const goToNextState = () =>
    setAnimationState((state) => getNextAnimationState(state));

  const onAnimationEnd = () => {
    animationState === CLOSING && goToNextState();
  };

  return { animationState, goToNextState, onAnimationEnd };
};

export default useAnimationState;
