import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: {
    questions: [] as any,
    correctAnswers: [] as any,
    userAnswer: [] as any,
  },
  reducers: {
    setQuestions: (state, action: PayloadAction<string>) => {
      state.questions = [...state.questions, action.payload];
    },
    setCorrectAnswers: (state, action: PayloadAction<string>) => {
      state.correctAnswers = [...state.correctAnswers, action.payload];
    },
    setUserAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = [...state.userAnswer, action.payload];
    },
    resetState: (state) => {
      state.questions = [];
      state.correctAnswers = [];
      state.userAnswer = [];
    },
  },
});

export const answersReducer = answersSlice.reducer;
export const {setQuestions,setCorrectAnswers,setUserAnswer,resetState} = answersSlice.actions;
