import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from './types';

export function openMenu() {
  return { type: OPEN_MENU };
}

export function closeMenu() {
  return { type: CLOSE_MENU };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}
