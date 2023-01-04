import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { actAsyncGetCategories } from "./store/category/actions";
import { actAsyncGetMenus } from "./store/menu/actions";
import { actAsyncGetMe } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actAsyncGetCategories());
    dispatch(actAsyncGetMenus());
    dispatch(actAsyncGetMe());
  }, [dispatch]);
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
