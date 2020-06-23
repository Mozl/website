const initialState = {
  skills: [
    {
      name: 'React',
      description: 'some desc',
      image: '/skill-logos/react.png'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
