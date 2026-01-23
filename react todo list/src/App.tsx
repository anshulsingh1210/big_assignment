import { useState } from 'react'
import './App.css'

function App() {
  const [toDoList, setToDoList] = useState(["hello","anshul","a","b","v"])
  const [currentItem, setCurrentItem] = useState('')
  
  console.log(currentItem)

  console.log(toDoList)
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>){
    // setCurrentItem()
    setCurrentItem(event.target.value);
  }

  function addItemToList(){
    setToDoList([...toDoList,currentItem])
    setCurrentItem("")

  }

  function handleDelete(index: number) {
    console.log(index)
    setToDoList(toDoList.filter((item,ind) => ind !== index));
  }

  function handleEdit(index: number) {
    const newValue: string | null=prompt(`what is it that you want to edit in ${toDoList[index]}`)
    console.log(newValue)
    if (newValue==null || newValue=="") {
      alert("You haven't entered anything mf")
      return
    }
    let newToDoList: string[]=[];
    for(let i=0; i<toDoList.length ; i++){
      if (i!=index){
        newToDoList.push(toDoList[i])
      } else {
        newToDoList.push(newValue)
      }
    }

    setToDoList([...newToDoList])

  }

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='border-2 border-lime-600 w-[50%] h-[50%] p-3'>
          <input type='text' placeholder='add item ...' 
            className='p-1.5 border-1 border-black rounded-md'
            onChange={handleOnChange}
            value={currentItem}
              ></input>
          <br />
          <button 
            className='bg-black text-white p-2 rounded-md mt-2'
            onClick={addItemToList}
              >ADD</button>

          <div className='mt-4'>
            {toDoList && toDoList.map((listItem,index) => (
              <div className='bg-lime-400 text-lime-700 border-1 border-lime-900 h-[60px] flex items-center justify-between' key={index}>
                <div className='ml-4'>
                  {listItem}
                </div>
                <div>
                  <button 
                    className='mr-4 bg-amber-50 p-2 rounded-md'
                    onClick={() => handleDelete(index)}
                    >
                      Delete</button>
                  <button 
                  className='mr-4 bg-amber-50 p-2 rounded-md'
                  onClick={() => handleEdit(index)}
                    >Edit</button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
