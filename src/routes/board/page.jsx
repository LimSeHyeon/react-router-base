import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getBoardList } from '~/lib/apis/board';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoardList } from '~/store/reducers/board';

export default function BoardPage() {

  // useNavigate: navigate 함수를 사용할 수 있게 함
  // navigate: 페이지 이동 함수
  const navigate = useNavigate();
  const {boards: boardList, loading } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  useEffect(()=> {
    const action = fetchBoardList();
    console.log("action", action);
    dispatch(action);
  }, [dispatch]);

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
