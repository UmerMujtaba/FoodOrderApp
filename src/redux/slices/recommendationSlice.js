import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../utils/supabase';

//Thunk to fethc recommendations from Supabase
export const fetchRecommendations = createAsyncThunk(
    'recommendations/fetchRecommendations',
    async () => {
      const { data, error } = await supabase
        .from('item_counts')
        .select('*')
        .gt('count', 10);
  
      if (error) {
       
        console.error('Error fetching recommendations:', error);
        return [];  // Return an empty array in case of an error
      }
      console.log("🚀 ~ Fetched data:", data)
     
      return data;
    }
  );
  



const recommendationSlice = createSlice({
    name: 'recommendation',
    initialState: {
        recommendations: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setRecommendations: (state, action) => {
            state.recommendations = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRecommendations.fulfilled, (state,action) => {
                state.isLoading = false;
                state.recommendations = action.payload;
            })
            .addCase(fetchRecommendations.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message;  // Handle the error appropriately
            })
    },
})

export const { setRecommendations } = recommendationSlice.actions;
export default recommendationSlice.reducer;

