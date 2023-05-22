import { Data } from "../interfaces"
import useFetch from "../useFetch"
import Title from "../snippets/Title"
import Card from "../snippets/Card"
import { apiKey, urlApi } from "../services/api"


const initialEndpoint = `${urlApi}?apikey=${apiKey}&country=ar&language=es&category=top`



const Sidebar = () => {
  const fetchState = useFetch<Data>(initialEndpoint)
  const results = fetchState.data?.results.slice(5,9)
  if (fetchState?.state == 'loading'){
    return(
        <div className="sidebar-loading"> Cargando ...</div>
    )
}
  return (
    <aside className='aside'>
      <Title title="Más vistas"/>
      <div className="py-8 flex md:flex-col overflow-x-auto md:overflow-x-hidden snap-x snap-x-[inherit] space-x-4 ">
        {results?.map(post=>(
             <Card post={post} key={post.title}/>
        ))}
      </div>
      
      </aside>
  )
}

export default Sidebar