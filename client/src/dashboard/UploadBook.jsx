import React,{useEffect,useState} from 'react'
import {Textarea,Label,TextInput,Select,Button} from 'flowbite-react'

const UploadBook = () => {
  const bookCategories=[
    "Fiction",
    "Non Fiction",
    "Novel",
    "Mystery",
    "Horror",
    "Rommance",
    "Childern",
    "Science",
    "Self-help",
    "Contemporary",
    "Buisness",
    "Fantasy",
    "Other"
  ]
  const[selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0])
  const handleChanges =(event)=>{
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }
  const handleSubmission=(event)=>{
      event.preventDefault()
      const form = event.target

      const bookTitle=form.bookTitle.value
      const authorName=form.authorName.value
      const imageUrl=form.imageUrl.value
      const category=form.categoryName.value
      const bookDescription=form.bookDescription.value
      const bookObj ={
          bookTitle,authorName,imageUrl,category,bookDescription
      }
      console.log(bookObj)
      fetch("http://book-store-web-app-api.vercel.app/upload-book",{
        method:"POST",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(bookObj)

      }).then(res=>res.json()).then(data=>{
        alert("Book Successfully Uploaded!!")
      })
      form.reset()
  }

  return (
    <div className='px-4 lg:px-24 my-12'>
      <h2 className="mb-8 text-5xl font-bold">Upload Yours Books Here</h2>
      <form  onSubmit={handleSubmission} className="flex lg:w-[800px] flex-col flex-wrap gap-5">
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                  <Label htmlFor="bookTitle" value="Book Title"></Label>
              </div>
              <TextInput id='bookTitle' placeholder='Book Name' name='bookTitle' required type='text'/>
          </div>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                  <Label htmlFor="authorName" value="Author Name"></Label>
              </div>
              <TextInput id='authorName' placeholder='Author Name' name='authorName' required type='text'/>
          </div>
        </div>
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                  <Label htmlFor="imageUrl" value="Book Image Url"></Label>
              </div>
              <TextInput id='imageUrl' placeholder='URL Here' name='imageUrl' required type='text'/>
          </div>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                  <Label htmlFor="inputState"  value="Book Category"></Label>
              </div>
             <Select id='inputState' name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChanges}>
              {
                bookCategories.map((option) =><option key={option} value={option}>{option}</option>)
              }
             </Select>
          </div>

        </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" className="w-full" name="bookDescription" placeholder="Book Description.." required  rows={6}/>
      </div>
      <Button type='submit' className='bg-violet-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 flex items-center justify-center'>Upload</Button>
      </form>
      
    </div>
  )
}

export default UploadBook
