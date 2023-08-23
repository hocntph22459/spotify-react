import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../types/product"
export const filmAPI = createApi({
    reducerPath: "film",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    tagTypes: ["film"],
    endpoints: (buidler) => ({
        getfilms: buidler.query<IProduct[], void>({
            query: () => `films`,
            providesTags: ["film"]
        }),
        getfilmByid: buidler.query<IProduct, number>({
            query: (id) => `films/${id}`
        }),
        createFilm: buidler.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: "films",
                    method: "POST",
                    body: product
                }
            },
            invalidatesTags: ["film"]
        }),
        updateFilm: buidler.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: `films/${product._id}`,
                    method: "PUT",
                    body: product
                }
            },
            invalidatesTags: ["film"]
        }),
        removeFilm: buidler.mutation<number, number>({
            query: (id) => {
                return {
                    url: `films/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["film"]
        })
    })
})

export const { useGetfilmsQuery, useGetfilmByidQuery, useCreateFilmMutation, useUpdateFilmMutation, useRemoveFilmMutation } = filmAPI