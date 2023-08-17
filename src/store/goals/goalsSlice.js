import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  loading: true,
  sortBy: "title",
  increment: true,
  completed: "all",
};

export const getAllGoals = createAsyncThunk(
  "goals/fetch",
  async ({ sortBy, increment, completed }) => {
    const response = await fetch(
      `https://64b6938adf0839c97e15cf8a.mockapi.io/goals?sortBy=${sortBy}&order=${
        increment ? "esc" : "desc"
      }${
        completed === "all"
          ? ""
          : completed === "completed"
          ? "&completed=true"
          : "&completed=false"
      }`
    )
      .then((req) => req.json())
      .catch((error) => new Error(error));
    return response;
  }
);

export const addGoal = createAsyncThunk("addGoal/fetch", async (data) => {
  console.log(data);
  const response = await fetch(
    `https://64b6938adf0839c97e15cf8a.mockapi.io/goals`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      console.log("task", task);
    })
    .catch((error) => {
      // handle error
    });
  console.log("response", response.data);

  return response;
});

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    createGoal(state, action) {},
    updateGoal(state, action) {},
    deleteGoal(state, action) {},
    removeAllGoals(state, action) {
      state.goals = [];
    },
    reSortBy(state, action) {
      state.sortBy = action.payload.type;
    },
    changeSortDirection(state, action) {
      state.increment = action.payload.type;
    },
    filter(state, action) {
      state.completed = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGoals.fulfilled, (state, action) => {
      state.goals = [];
      state.goals.push(...action.payload);
      state.loading = false;
    });
  },
});

export default goalsSlice.reducer;

export const {
  createGoal,
  updateGoal,
  deleteGoal,
  removeAllGoals,
  reSortBy,
  changeSortDirection,
  filter,
} = goalsSlice.actions;
