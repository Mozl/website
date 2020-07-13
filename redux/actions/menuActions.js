import { CLOSE_MENU, TOGGLE_MENU } from './types';

export function closeMenu() {
  return { type: CLOSE_MENU };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}
