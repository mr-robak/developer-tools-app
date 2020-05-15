const initialState = [
  {
    id: 1,
    name: "Kelly",
    url: "https://hi-im-kelley.netlify.com",
    favorites: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Marcin",
    url: "http://marcinrobak.com/codaisseur/project_01/",
    favorites: [2, 5, 4],
  },
  {
    id: 3,
    name: "Danny",
    url: undefined,
    favorites: [1, 3, 6],
  },
  {
    id: 4,
    name: "Jabba",
    url: undefined,
    favorites: [1, 2, 3, 6],
  },
];

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
