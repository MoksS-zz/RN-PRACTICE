import { LOAD_POSTS, DEFAULT, TOOGLE_BOOKED, REMOVE_POST, ADD_POST } from '../typesStore';

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

const redusersObj = {
  [LOAD_POSTS]: (state, posts) => ({
    ...state,
    allPosts: posts,
    bookedPosts: posts.filter((post) => post.booked),
  }),

  [TOOGLE_BOOKED]: (state, id) => {
    const allPosts = state.allPosts.map((post) => {
      if (post.id === id) post.booked = !post.booked;
      return post;
    });

    return {
      ...state,
      allPosts,
      bookedPosts: allPosts.filter((post) => post.booked),
    };
  },

  [REMOVE_POST]: (state, id) => ({
    ...state,
    allPosts: state.allPosts.filter(p => p.id !== id),
    bookedPosts: state.bookedPosts.filter(p => p.id !== id)
  }),

  [ADD_POST]: (state, newPost) => ({
    ...state,
    allPosts: [newPost, ...state.allPosts]
  }),

  [DEFAULT]: (state) => state,
};

export const postReducer = (state = initialState, action) => {
  const reduser = redusersObj[action.type] || redusersObj[DEFAULT];
  return reduser(state, action.payload);
};
