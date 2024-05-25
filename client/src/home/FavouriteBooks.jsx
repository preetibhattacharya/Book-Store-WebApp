import React,{useEffect,useState} from 'react'
import BookCard from '../components/BookCard'

const FavouriteBooks = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3003/all-books").then(res=>res.json()).then(data=>setBooks(data))
  },[])
  return (
    <div>
      <BookCard books={books} headLine="Best Sellers"/>
    </div>
  )
}

export default FavouriteBooks