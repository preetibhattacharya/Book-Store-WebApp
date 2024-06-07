import React,{useEffect,useState} from 'react'
import BookCard from '../components/BookCard'

const FavouriteBooks = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3003/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(10,17)))
  },[])
  return (
    <div>
      <BookCard books={books} headLine="Popular Choices"/>
    </div>
  )
}

export default FavouriteBooks