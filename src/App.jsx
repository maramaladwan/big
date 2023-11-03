import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from './Modal'

function App() {
  const [show, setsShow] = useState(false)
  const [movies, setMovies] = useState([])
  const [modal, setModal] = useState({})
  const getDataExcuse = async (excuse1) => {
    try {
      let respone = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2e80e12af4ae617b10eb817374016bec`)
      setMovies(respone.data.results)
      console.log(respone.data.results)
    } catch (error) {
      console.log(`ERROR! ${error}`)
    }
  }
  const hide = () => {
    setsShow(false)
    console.log(show)

  }
  const showModal = (mid) => {
    const selectedMovie = movies.find(item => item.id === mid);
    if (selectedMovie) {
      setModal(selectedMovie);
      setsShow(true); // Show the modal
    }

  }
  useEffect(() => { getDataExcuse() }, [])
  return (
    <>
      <div id='con'>
        <nav className='d-flex justify-content-between bg-dark p-1 '>
          <div className='d-flex p-1 mx-2'>
            <span className='align-self-center text-white'>MovieApp </span>
            <span className='align-self-center text-white'>Treding</span>
          </div>
          <div className='d-flex justify-content-around w-50 mx-1'>
            <input className='text-dark ms-auto form-control w-75 mx-1' placeholder='enter a movie name' type="text" />
            <button className='btn btn-secondary'>Search</button>
          </div>
        </nav>

        <Modal hide={hide} show={show} modalData={modal} />
        <div className="cards">

          {movies.map(e => {
            return <Card key={e.id} mid={e.id} poster_path={e.poster_path} title={e.original_title} disc={e.overview} showModal={showModal} />
          })}
        </div>

      </div>
    </>
  )
}

export default App
