import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actAsyncGetCategories } from "./store/category/actions";
import { actAsyncGetMenus } from "./store/menu/actions";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actAsyncGetCategories());
    dispatch(actAsyncGetMenus());
  }, []);
  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/search/:searchValue">
            <SearchPage />
          </Route>
          <Route path="/category/:categoryId">
            <CategoryPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
