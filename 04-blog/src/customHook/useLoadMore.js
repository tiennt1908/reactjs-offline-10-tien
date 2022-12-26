import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actAsyncGetGeneralPosts,
  actAsyncSearchPosts,
} from "../store/post/actions";

export default function useLoadMore(type) {
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const { searchValue } = useParams();
  // const getPost = (p) => {
  //   setLoading(true);
  //   if (type === "searchPosts") {
  //     dispatch(actAsyncSearchPosts(searchValue, p)).then((data) => {
  //       setLoading(false);
  //     });
  //   } else if (type === "generalPosts") {
  //     dispatch(actAsyncGetGeneralPosts(p)).then((data) => {
  //       setLoading(false);
  //     });
  //   }
  // };
  // useEffect(() => {
  //   getPost(1);
  // }, []);
  // const loadMore = () => {
  //   if (!loading) {
  //     const nextPage = page + 1;
  //     getPost(nextPage);
  //     setPage(nextPage);
  //   }
  // };
  // const posts = useSelector((state) => state.post[type]) || [];
  // const totalPage = useSelector((state) => state.post.totalPage);
  // return {
  //   loadMore,
  //   posts,
  //   totalPage,
  //   loading,
  //   isLastPage: page === totalPage,
  //   searchValue,
  //   getPost,
  //   setPage,
  // };
}
