import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div>
            <h1>MainPage</h1>
            <p>Hello My React Router</p>
        
        <div>
        <Link to="/board" state={{name:"임세현"}}>
            게시판으로 이동
            </Link>
        </div>
        
        <div>
        <a href="/board">anchor 태그</a>
        </div>

        </div>
    );
}