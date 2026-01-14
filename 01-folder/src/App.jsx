import { useState } from "react"

const App = () => {

  const [notes, Setnotes] = useState("")
  const [messages, Setmessages] = useState("")
  const [arr, Setarr] = useState([])

  function enternotes(el) {
    Setnotes(el.target.value)
  }

  function entermessages(ele) {
    Setmessages(ele.target.value)
  }

  function submitform(e) {

    e.preventDefault()

    Setarr([...arr,
    {
      notes: notes,
      messages: messages,
    }
    ])

    Setnotes("")
    Setmessages("")
  }

  function deletetask(index) {
    const copyarr = [...arr,]
    copyarr.splice(index, 1)
    Setarr(copyarr)
  }

  return (
    <>
      <form onSubmit={submitform}>
        <h1>Add Notes</h1>
        <div className="forminp">
          <input type="text" onChange={enternotes} value={notes} placeholder="Enter Note" className="inp" />
          <input type="text" onChange={entermessages} value={messages} placeholder="Enter Message" className="details" />
          <button className="btn">Add</button>
        </div>
      </form>

      <h1>View Notes</h1>
      <div className="container">
        {arr.map((item, index) => (
          <div className="display" key={index}>
            <h2>{item.notes}</h2>
            <button className="deleteicon" onClick={() => {
              deletetask(index)
            }} >❌</button>
            <p>{item.messages}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App