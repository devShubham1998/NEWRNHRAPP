import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {testApi} from '../../services/AuthRequest/LoginRequest';

export const fetchData = createAsyncThunk('fetchApi', async () => {
  const response = await testApi();
  return response;
});

const initialState = {
  loading: true as boolean,
  error: '' as any,
  attachments: [] as any,
};

const callApi = createSlice({
  name: 'attachment',
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.attachments = action.payload.request;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error;
    });
  },
  reducers: {},
});
export default callApi.reducer;
