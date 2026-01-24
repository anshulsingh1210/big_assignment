import { useState } from 'react'
import './App.css'



function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "React is a ___",
    options: ["Framework", "Library", "Language", "Database"],
    answer: "Library",
  },
  {
    question: "Which hook manages state?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
  },
]
  const [currentOption,setCurrentOption] = useState("")
  const [total,setTotal] = useState(0)
  const [showResult,setShowResult] = useState(false)

  // console.log("Total", total)
  console.log("Question No.", currentQuestion)
  function handleSubmit() {
    if (currentOption===""){
      alert("Select an option")
      return
    } else if(currentOption === questions[currentQuestion].answer){
      setTotal(total+1)
    }
    if(currentQuestion===4) {
      result()
    }
    if(currentQuestion!=5){
      setCurrentQuestion((prev) => prev+1)
      console.log("CurrentQuestion : ", currentQuestion)
    } 
    
  }

  function result() {
    setShowResult(true)
  }

  function handleOptionSelection(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentOption(event.target.value)
    // console.log(event.target.value)
  }

    if (showResult) {
      return (
        <>
          <div className='flex items-center justify-center h-screen'>
            <div className='border-2 border-lime-600 bg-black text-white w-[75%] h-[78%] p-3 flex flex-col items-center '>
              <div className='text-8xl'>
                QUIZ APP 
              </div>

              <div className='text-6xl mt-6'>
                Result
              </div>

              <div className='text-4xl mt-6'>
                Your Score : {total}
              </div>
            </div>
          </div>
        </>
      )
    }




  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='border-2 border-lime-600 bg-black text-white w-[75%] h-[78%] p-3 flex flex-col items-center '>
          <div className='text-8xl'>
            QUIZ APP 
          </div>
          
          {
            <div className=' m-6'>
              <div className='m-6 text-6xl'>{`Question ${currentQuestion+1}`}</div>
              <div className='m-6 text-6xl'>{questions[currentQuestion].question}</div>
              <div className='text-4xl'>
                <div className='m-4'>
                  <input 
                    type='radio' 
                    name='option' 
                    value={questions[currentQuestion].options[0]} 
                    checked={currentOption===questions[currentQuestion].options[0]}
                    onChange={handleOptionSelection}
                      />
                  <label className='m-4' htmlFor={`${questions[currentQuestion].options[0]}`}>{questions[currentQuestion].options[0]}</label><br />
                </div>
                
                <div className='m-4'>
                  <input type='radio' 
                    name='option' 
                    value={questions[currentQuestion].options[1]} 
                    checked={currentOption===questions[currentQuestion].options[1]}
                    onChange={handleOptionSelection}
                      />
                  <label className='m-4' htmlFor={`${questions[currentQuestion].options[1]}`}>{questions[currentQuestion].options[1]}</label><br />
                </div>

                <div className='m-4'>
                  <input type='radio' 
                    name='option' 
                    value={questions[currentQuestion].options[2]} 
                    checked={currentOption===questions[currentQuestion].options[2]}
                    onChange={handleOptionSelection}
                      />
                  <label className='m-4' htmlFor={`${questions[currentQuestion].options[2]}`}>{questions[currentQuestion].options[2]}</label><br />
                </div>

                <div className='m-4'>
                  <input type='radio' 
                    name='option' 
                    value={questions[currentQuestion].options[3]} 
                    checked={currentOption===questions[currentQuestion].options[3]}
                    onChange={handleOptionSelection}
                      />
                  <label className='m-4' htmlFor={`${questions[currentQuestion].options[3]}`}>{questions[currentQuestion].options[3]}</label>
                </div>
              </div>
            </div>
          }

          <button 
            className='text-white bg-blue-800 text-4xl p-4 rounded-xl self-start ml-[12%]'
            onClick={handleSubmit}
            >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default App
