import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductsState from "./types";


const initialState: ProductsState = {
    selectedCategoryId: null,
    selectedSubcategoryId: null,
    products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectSubcategory(
            state,
            action: PayloadAction<{
                categoryId: string;
                subcategoryId: string;
                products: ProductsState['products'];
            }>
        ) {
            state.selectedCategoryId = action.payload.categoryId;
            state.selectedSubcategoryId = action.payload.subcategoryId;
            state.products = action.payload.products;
        },
        clearSelection(state) {
            state.selectedCategoryId = null;
            state.selectedSubcategoryId = null;
            state.products = [];
        },
    },
});

export const { selectSubcategory, clearSelection } = productsSlice.actions;

export default productsSlice.reducer;