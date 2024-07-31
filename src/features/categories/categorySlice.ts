import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}
// banco de dados
const category: Category = {
  id: "0ce68dd5-2a0a-4f8d-9d8b-3d9f7f7b9b9b",
  name: "Gustavo",
  description: "Loren bonitão loren",
  is_active: true,
  deleted_at: null,
  created_at: "2024-01-01T00:00:00.000000Z",
  updated_at: "2024-01-01T00:00:00.000000Z",
};

export const initialState = [
  category,
  {
    ...category,
    id: "1ce68dd5-2a0a-4f8d-9d8b-3d9f7f7b9b9b",
    name: "Gustavo 2",
  },
  {
    ...category,
    id: "2ce68dd5-2a0a-4f8d-9d8b-3d9f7f7b9b9b",
    name: "Gustavo 3",
  },
  {
    ...category,
    id: "3ce68dd5-2a0a-4f8d-9d8b-3d9f7f7b9b9b",
    name: "Gustavo 4",
  },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCreateCategory(state, action) {},
    deleteCreateCategory(state, action) {},
  },
});

export default categoriesSlice.reducer;
