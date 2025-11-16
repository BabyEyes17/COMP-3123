import axiosInstance from './AxiosInstance'

const BooksApi = {
    getBooks: async () => {
        try {
            const response = await axiosInstance.get("/books")
            console.log(response)
            return response.data.data
        } catch (error) {
            throw new Error(error); 
        }
    },
    getBookByID: async (bookID) => {
        try {
            const response = await axiosInstance.get(`/book/${bookID}`)
            console.log(response)
            return response.data.data
        } catch (error) {
            throw new Error(error); 
        }
    },
    addBook: async (book) => {
        try {
            const response = await axiosInstance.post(`/books`, book)
            console.log(response)
            return response.data.data
        } catch (error) {
            throw new Error(error); 
        }
    },
    updateBook: async (book) => {
        try {
            const response = await axiosInstance.put(`/book/${book._id}`, book)
            console.log(response)
            return response.data.data
        } catch (error) {
            throw new Error(error); 
        }
    },
    deleteBook: async (bookID) => {
        try {
            const response = await axiosInstance.delete(`/book/${bookID}`)
            console.log(response)
            return response.data.data
        } catch (error) {
            throw new Error(error); 
        }
    },
}

export default BooksApi
