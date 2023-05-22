import Banner from './components/Banner'
import Grid from './components/Grid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import useFetch from './useFetch'
import { Data } from './interfaces'
import Footer from './components/Footer'
import { useState } from 'react'
import {urlApi, apiKey} from './services/api'

const initialEndpoint = `${urlApi}?apikey=${apiKey}&country=ar&language=es`

function App() {
  const [endpoint, setEndpoint]=useState(initialEndpoint)
  const [search, setSearch] = useState('')
  const fetchState = useFetch<Data>(endpoint)
  const results = fetchState.data?.results
  const [categoryLabel, setCategoryLabel]=useState({
    label:'Noticias',
    category:''
  })

  const handleCategory=(category:string, label:string):void=>{
    const newEndpoint = `${initialEndpoint}&category=${category}` 
    setCategoryLabel({label: label, category: category})
    setEndpoint(newEndpoint)
    setSearch('')
  }
  const handleSearch = (value:string)=>{
      setSearch(value)
      setEndpoint(`${initialEndpoint}&q=${value}` )
  }
  return (
    <>
     <Header 
      handleCategory={handleCategory} 
      categoryLabel={categoryLabel} 
      search={search}
      handleSearch={handleSearch}/>
     <Banner fetchState={fetchState}/>
     <main className='main'>
      <section className='col-span-5 md:col-span-4'>
       <Grid results={results} fetchState={fetchState} title={categoryLabel.label}/>
      </section>
      <Sidebar/>
     </main>
     <Footer/>
    </>
  )
}

export default App
