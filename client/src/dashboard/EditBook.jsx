import React ,{useState} from 'react'
import {useLoaderData,useParams} from 'react-router-dom'
import {Textarea,Label,TextInput,Select,Button} from 'flowbite-react'
const EditBook = () => {

  const{id} = useParams();
  const{bookTitle,authorName,imageUrl,category,bookDescription}= useLoaderData()
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
    const handleUpdate=(event)=>{
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
        fetch(`http://book-store-web-app-api.vercel.app/book/${id}`,{
          method:'PATCH',
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(bookObj)
  
        }).then(res=>res.json()).then(data=>{
          alert("Book Successfully Updated!!")
        })
        form.reset()
        
       
    }
  
    return (
      <div className='px-4 lg:px-24 my-12'>
        <h2 className="mb-8 text-5xl font-bold">Update Yours Books Here</h2>
        <form  onSubmit={handleUpdate} className="flex lg:w-[800px] flex-col flex-wrap gap-5">
          <div className="flex gap-8">
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                    <Label htmlFor="bookTitle" value="Book Title"></Label>
                </div>
                <TextInput id='bookTitle' placeholder='Book Name' name='bookTitle' required type='text'  defaultValue={bookTitle}/>
            </div>
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                    <Label htmlFor="authorName" value="Author Name"></Label>
                </div>
                <TextInput id='authorName' placeholder='Author Name' name='authorName' required type='text' defaultValue={authorName}/>
            </div>
          </div>
          <div className="flex gap-8">
            <div className='lg:w-1/2'>
                <div className="mb-2 block">
                    <Label htmlFor="imageUrl" value="Book Image Url"></Label>
                </div>
                <TextInput id='imageUrl' placeholder='URL Here' name='imageUrl' required type='text'  defaultValue={imageUrl}/>
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
          <Textarea id="bookDescription" className="w-full" name="bookDescription" placeholder="Book Description.." required  rows={6}  defaultValue={bookDescription}/>
        </div>
        <Button type='submit' className='bg-violet-600 px-6 py-2 mt-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 flex items-center justify-center'>Update Book</Button>
        </form>
        
      </div>
    )
  
  
}

export default EditBook
