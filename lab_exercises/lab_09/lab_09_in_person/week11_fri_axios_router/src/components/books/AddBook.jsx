import React, {useState} from 'react'
import BooksApi from '../../api/BooksApi'

const BOOK_INIT = {
    title: '',
    author: '',
    price: 0,
    rating: 0
}

export default function AddBook() {

    const [book, setBook] = useState
    const addNewBook = async () => {
        try {
            const response 
        }
    }

  return (
    <div>
       <h2>Add new Book</h2>
       <form>
          <div>
             <label>Title: </label>
             <input type="text" name="title" />
          </div>
          <div>
             <label>Author: </label>
             <input type="text" name="author" />
          </div>
          <div>
             <label>Price: </label>
             <input type="number" name="price" />
          </div>
          <div>
             <label>Rating: </label>
             <input type="number" name="rating" step="0.1" min="0" max="5" />
          </div>
          <button type="submit">Add Book</button>
       </form>  
    </div>
  )
}
