const initialState = [
  {
    name: 'BBC Sounds',
    description: 'some desc',
    image: '/sounds.png'
  },
  {
    name: 'second project',
    description: 'some other desc',
    image: '/sounds.png'
  },
  {
    name: 'third project',
    description: 'some other desc',
    image: '/sounds.png'
  }
];

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
