export const ACT_GET_LATEST_POSTS = "ACT_GET_LATEST_POSTS";
export const ACT_GET_POPULAR_POSTS = "ACT_GET_POPULAR_POSTS";
export const ACT_GET_NEWS_POSTS = "ACT_GET_NEWS_POSTS";
export function actGetLatestPosts(posts) {
  return {
    type: ACT_GET_LATEST_POSTS,
    payload: {
      posts,
    },
  };
}
export function actGetPopularPosts(posts) {
  return {
    type: ACT_GET_POPULAR_POSTS,
    payload: {
      posts,
    },
  };
}
export function actGetNewsPosts(posts) {
  return {
    type: ACT_GET_NEWS_POSTS,
    payload: {
      posts,
    },
  };
}
