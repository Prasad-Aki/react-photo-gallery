import { useEffect, useState } from "react"
import axios from 'axios'
function App() {

  const [data, Setdata] = useState([])
  const [loading, Setloading] = useState(true)
  const [i, Seti] = useState(1)

  async function fetchdata() {
    Setloading(true)
    const response = await axios(`https://picsum.photos/v2/list?page=${i}&limit=30`)
    Setdata(response.data)

    Setloading(false)
  }

  const prevbtn = () => {
    if (i > 1) {
      Seti(i - 1)
    }
  }

  const nextbtn = () => {
    Seti(i + 1)
  }

  useEffect(() => {
    fetchdata()
  }, [i])

  if (loading) {
    return <h2 className="loader">Loading...</h2>;
  }


  return (
    <>
      <div className="main">
        <div className="container">
          {data.map((item) => (
            <div key={item.id} className="display">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img className="img" src={item.download_url} alt="" />
              </a>
            </div>
          ))}

        </div>
        <div className="btns">
          <button className="prev" onClick={prevbtn} disabled={i == 1} >Prev</button>
          <h4 className="pagenum">Page {i}</h4>
          <button className="next" onClick={nextbtn} >Next</button>
        </div>
      </div>
    </>
  )
}

export default App
