const myMiddleware = (store) => (next) => (action) => {
    //store: redux store 자체
    console.log("dispatching...");
    console.log(store.getState());

    //next: 다음 미들웨어 = 함수
    //action: action 객체
    let result = next(action);
    console.log("next state");
    console.log(store.getState());
    return result;
}

// 아래와 동일한 로직이라 보면 됨
// function middleware2(store) {
//     return function(next) {
//         return function(action) {
//             let result = next(action);
//         }
//     };
// }

export default myMiddleware;