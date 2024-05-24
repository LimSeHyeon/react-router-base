import { createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
    counter: 0,
    color: "black",
};

/*
reduxjs/toolkit의 Slice
1. reducers만 정의해도,
    1.1. actionType을 정의. (<name>/<reducer이름>)
    1.2. actionCreator를 정의. (<reducer이름>)
    1.3. inner.js 라이브러리 적용. (원래 reducer는 새로운 state를 반환해야 함. = 기존 state 직접 변경 X)
        -> inner.js 라이브러리를 사용하면 state를 직접 변경하는 것처럼 코드 작성 가능


*/

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increaseCounter: (state) => {
            state.counter += 1;
        },
        decreaseCounter: (state) => {
            state.counter -= 1;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
    }
});

export const { increaseCounter, decreaseCounter, setColor } = counterSlice.actions;

// console.log("counter");
// console.log(increaseCounter());
// console.log(setColor());

export default counterSlice.reducer;