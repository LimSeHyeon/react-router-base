import MainRouter, { routerObj } from "./main-router";
import { Route, BrowserRouter, Routes, Link, RouterProvider } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  // return (
  //   <BrowserRouter>
  //   <div>
  //     <Link to='/'>메인</Link>
  //   </div>
  //   <div>
  //     <Link to='/board'>게시글</Link>
  //   </div>
  //   <div>
  //     <Link to='/board/write'>글쓰기 페이지</Link>
  //   </div>
  //     <Routes>
  //       {renderRoutes(routerObj)}
  //       {/* <Route path='/' element={"메인"}></Route>
  //       <Route path='/board' element={<>게시글</>}></Route>
  //       <Route path='/board/write' element={<>글쓰기페이지</>}></Route> */}
        
  //       </Routes>
  //   </BrowserRouter>
  // );
  // return <RouterProvider router={MainRouter}></RouterProvider>;
  return (
    <Provider store={store}>
      <RouterProvider router={MainRouter}/>
    </Provider>
  );
}

export default App;
