/** @format */

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";
import "swiper/scss";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/auth-context";
import LayoutAuthen from "./components/layout/LayoutAuthen";
//Default
const HomePage = lazy(() => import("./pages/HomePage"));
const Main = lazy(() => import("./components/layout/Main"));
const Movies = lazy(() => import("./pages/categorize/Movies"));
const TvSeries = lazy(() => import("./pages/categorize/TvSeries"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
//Authen
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<></>}>
        <ScrollToTop>
          <Routes>
            <Route element={<Main></Main>}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route exact path="/movie" element={<Movies></Movies>}></Route>
              <Route path="/discover" element={<Movies></Movies>}></Route>
              <Route path="/trending" element={<Movies></Movies>}></Route>
              <Route path="/top_rated" element={<Movies></Movies>}></Route>
              <Route path="/tv" element={<TvSeries></TvSeries>}></Route>
              <Route
                path="/tv/:movieId"
                element={<MovieDetailPage></MovieDetailPage>}
              ></Route>
              <Route
                path="/movie/:movieId"
                element={<MovieDetailPage></MovieDetailPage>}
              ></Route>
              <Route path="/user" element={<UserPage />}></Route>
              <Route path="*" element={<ComingSoon></ComingSoon>}></Route>
            </Route>
            <Route element={<LayoutAuthen />}>
              <Route
                path="/sign-up"
                element={<SignUpPage></SignUpPage>}
              ></Route>
              <Route
                path="/sign-in"
                element={<SignInPage></SignInPage>}
              ></Route>
            </Route>
            <Route path="*" element={<ComingSoon></ComingSoon>}></Route>
          </Routes>
        </ScrollToTop>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
