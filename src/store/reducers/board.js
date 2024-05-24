import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBoardList } from "~/lib/apis/board";

const iniitialState = {
    boards: [],
    loading: "idle",
};

// 비동기 처리를 위한 thunk 생성
const fetchBoardList = createAsyncThunk(
    "board/fetchBoardList",
    async (_data, thunkAPI) => {
      const data = await getBoardList();
      return data;
    }
  );
//api 호출 예정

const boardSlice = createSlice({
    name: "board",
    initialState: iniitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBoardList.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(fetchBoardList.fulfilled, (state, action) => {
            state.loading = "fulfilled";
            state.boards.push(...action.payload);
        });
        builder.addCase(fetchBoardList.rejected, (state, action) => {
            state.loading = "rejected";
            console.log(action);
        });
    },
});
export {fetchBoardList};
export default boardSlice.reducer;