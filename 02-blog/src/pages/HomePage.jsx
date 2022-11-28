import React from 'react'
import ArticleLastest from '../components/ArticleLastest';
import ArticlePopular from "../components/ArticlePopular";
import ArticleGeneral from "../components/ArticleGeneral";

export default function HomePage() {
  return (
   <>
      <ArticleLastest />
      <ArticlePopular />
      <ArticleGeneral />
   </>
  )
}
