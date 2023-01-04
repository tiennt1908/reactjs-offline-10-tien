import { ACT_GET_CHILD_COMMENTS, ACT_GET_COMMENTS } from "./action";

const initialState = {
  comments: {
    totalComment: 0,
    currentPage: 0,
    totalPage: 0,
    data: [],
  },
  child: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_COMMENTS:
      const newComments =
        action.payload.currentPage === 1
          ? action.payload.comments
          : [...state.comments.data, ...action.payload.comments];
      return {
        ...state,
        comments: {
          data: newComments,
          totalComment: action.payload.totalComment,
          totalPage: action.payload.totalPage,
          currentPage: action.payload.currentPage,
        },
      };
    case ACT_GET_CHILD_COMMENTS:
      const cloneComment = [...state.comments.data];
      const index = cloneComment.findIndex(
        (e) => e.id === action.payload.parentId
      );
      cloneComment[index].child = {
        data: [...cloneComment[index].child.data, ...action.payload.comments],
        totalComment: action.payload.totalComment,
        totalPage: action.payload.totalPage,
        currentPage: action.payload.currentPage,
      };
      return {
        ...state,
        comments: {
          ...state.comments,
          data: cloneComment,
        },
      };
    default:
      return state;
  }
}

export default reducer;
