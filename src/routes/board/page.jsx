// import MyNavbar from "~/components/MyNavbar/MyNavbar";
// import MyFooter from "~/components/MyFooter/MyFooter";

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getBoardList } from '~/lib/apis/board';

export default function BoardPage() {

  const [boardList, setBoardList] = useState([]);

  // const location = useLocation();
  // console.log(location);

  // useNavigate: navigate 함수를 사용할 수 있게 함
  // navigate: 페이지 이동 함수
  const navigate = useNavigate();

  useEffect(()=>{
    getBoardList().then((data)=>{
      setBoardList(data);
    });
  }, []);

  return (
    <div>
      {/* <Link to='/board/13'>13번 게시글로 이동</Link> */}
      {/* <div onClick={()=> {
        navigate("/board/10");
      }}
      >
        10번 게시글로 이동.
        </div>
        <div onClick={()=>{
          navigate(-1);
        }}
        >
          뒤로가기
        </div> */}
      <h1>여기는 게시판이에오</h1>
      <p>게시판 글을 확인해볼까용?</p>
      <ul>
        {boardList.map((board) => (
          // <Link to='/board/:boardId'><li key={board.__id}>{board.title}</li></Link>
          <li key={board.__id} onClick={e=>navigate(`/board/${board.id}`)}>{board.title}</li>
        ))}
      </ul>
    </div>
  );
}
