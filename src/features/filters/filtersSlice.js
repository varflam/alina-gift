import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
    filters: [],
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
                    state.filters = action.payload;
                })
    }
});

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/filters");
    }
)

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;