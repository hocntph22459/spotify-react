import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../types/product"
export const filmAPI = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    tagTypes: ["product"],
    endpoints: (buidler) => ({
        getfilms: buidler.query<IProduct[], void>({
            query: () => `products`,
            providesTags: ["product"]
        }),
        getfilmByid: buidler.query<IProduct, number>({
            query: (id) => `products/${id}`
        }),
        createFilm: buidler.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: "products",
                    method: "POST",
                    body: product
                }
            },
            invalidatesTags: ["product"]
        }),
        updateFilm: buidler.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: `products/${product._id}`,
                    method: "PUT",
                    body: product
                }
            },
            invalidatesTags: ["product"]
        }),
        removeFilm: buidler.mutation<number, number>({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["product"]
        })
    })
})

export const { useGetfilmsQuery, useGetfilmByidQuery, useCreateFilmMutation, useUpdateFilmMutation, useRemoveFilmMutation } = filmAPI