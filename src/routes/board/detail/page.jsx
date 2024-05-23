import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBoardDetail } from "~/lib/apis/detail";

export default function BoardDetailPage() {
  // userParams: url path(:boardId) 변수 받기
  const params = useParams();
  console.log(params);
  const [boardContent, setboardContent] = useState({});

  useEffect(() => {
    getBoardDetail({ params: params.boardId }).then((data) => {
      setboardContent(data);
    });
  }, []);

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("where"));
  // console.log(searchParams.get("cgr"));

  return (
    <div>
      <h1>BoardContent</h1>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{boardContent.title}</h3>
          <div>{boardContent.author}</div>
        </div>
        <div>{boardContent.content}</div>
      </div>
    </div>
  );
}
