import { Post, useFetchState, Data } from "../interfaces"
interface Props{
  fetchState:useFetchState<Data>
}



const Banner = ({fetchState}:Props) => {
  const results = fetchState.data?.results
  const placeholderImg='https://placehold.co/600x400?text=No+Image'
  if (fetchState?.state == 'loading'){
    return(
        <div className="banner-loading"> Cargando ...</div>
    )
}
  return (
    <section className="banner-box">
        {results?.map(({title, image_url, category, creator}:Post)=>(
          <div key={title} className="banner-wrapper">
            <figure className="banner-figure">
              <img src={image_url ? image_url : placeholderImg} alt={title} className="w-full h-full object-cover"/>
            </figure>
            <div className="banner-info">
              <div className="w-3/4 md:w-1/2 mx-auto">
                <h2 className="banner-category">{category[0]}</h2>
                <h1 className="banner-title">{title}</h1>
                <p className="banner-creator">{creator ? `por: ${creator}` : null}</p> 
              </div>              
            </div>
          </div>
        ))}       
    </section>
  )
}

export default Banner