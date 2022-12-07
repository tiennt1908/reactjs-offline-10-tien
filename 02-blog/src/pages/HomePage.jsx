import React from 'react';
import ArticleLastest from '../components/ArticleLastest';
import ArticlePopular from "../components/ArticlePopular";
import ArticleGeneral from "../components/ArticleGeneral";
import { connect } from 'react-redux';

function HomePage({ posts }) {
  console.log(posts);
  return (
    <>
      <ArticleLastest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  )
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, null)(HomePage)