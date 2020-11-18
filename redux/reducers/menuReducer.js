export default function menuReducer (state = null, action) {
  switch (action.type) {
    case 'CLOSE_MENU':
      return {
        ...state,
        isMenuOpen: false
      };
    case 'OPEN_MENU':
      return { isMenuOpen: true };
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    default:
      return state;
  }
}
