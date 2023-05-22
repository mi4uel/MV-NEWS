import { Post } from "../interfaces"
import Title from "../snippets/Title"
import Card from "../snippets/Card"
import { Data, useFetchState } from "../interfaces"
interface Props{
    results?:Post[],
    fetchState?:useFetchState<Data>,
    title:string
}
const Grid = ({results, fetchState, title}:Props)=> {
    if (fetchState?.state == 'loading'){
        return(
            <div className="grid-loading"> Cargando ...</div>
        )
    }
    if(fetchState?.data?.totalResults == undefined || fetchState?.data?.totalResults > 0 ){
       return (
    <section className="py-8">
        <Title title={title}/>
        <div className="grid-box">
        {results?.map((post:Post)=>(
            <Card post={post} key={post.title}/>
        ))}
        </div>
    </section>
  ) 
    }else{
        return (
            <section className="py-8">
            <h2>Sin resultados</h2>
        </section>
        )
    }
  
}

export default Grid