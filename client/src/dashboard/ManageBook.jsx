import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from 'react-router-dom'

const ManageBook = () => {
  const[allBooks,setAllBooks]= useState([])
  useEffect(()=>{
    fetch("http://localhost:3003/all-books").then(res=>res.json()).then(data=>setAllBooks(data))
  },[])

  const handleDelete =(id)=>{
    fetch(`http://localhost:3003/book/${id}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>
      alert("Book Deleted Successfully"))
    
  }
  return (
    <div className='px-4 lg:px-24'>
      <h2 className="mt-8 mb-8 text-4xl font-bold">Manage Your Books</h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>Book No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book,index)=><Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>{book.bookPrice}</Table.Cell>
            <Table.Cell>
             <Link to={`/admin/dashboard/edit-book/${book._id}`} className="font-medium text-violet-600 hover:underline dark:text-violet-700 mr-3"> 
                Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='bg-violet-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Delete</button>
            </Table.Cell>
          </Table.Row>
          

        </Table.Body>)
        }
        
          
        
      </Table>
    </div>
  )
}

export default ManageBook
