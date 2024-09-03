export default interface ProductsState {
    selectedCategoryId: string | null;
    selectedSubcategoryId: string | null;
    products: {
        productName: string;
        productPrice: number;
        productWeight: string;
        productImg: string;
    }[];
}