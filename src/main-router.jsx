import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";
import BoardPage from "~/routes/board/page";
import BoardDetailPage from "~/routes/board/detail/page";
import BoardWritePage from "~/routes/board/write/page";

import CounterPage from "~/routes/counter/page";
import TodoPage from "~/routes/todo/page";
import BoardLayout from "~/routes/board/layout";

export const routerObj = [
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/counter",
    element: <CounterPage />,
    index: true,
  },
  {
    path: "/todo",
    element: <TodoPage />,
    index: true,
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <BoardPage />,
      },
      {
        // parameter 전달 받기
        path: ":boardId",
        element: <BoardDetailPage />,
      },
      {
        path: "write",
        element: <BoardWritePage />,
      },
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;
