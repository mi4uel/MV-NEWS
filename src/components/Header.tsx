const categories=[
    {
        label:"politica",
        keyword:"politics"
    },
    {
        label:"Mundo",
        keyword:"world "
    },
    {
        label:"deportes",
        keyword:"sports"
    },
    {
        label:"entretenimiento",
        keyword:"entertainment"
    },
    {
        label:"salud",
        keyword:"health"
    },{
        label:"tecnología",
        keyword:"technology "
    }
]

interface Props{
    handleCategory: (category:string, label:string)=>void,
    categoryLabel:{
        label:string,
        category:string
    },
    search:string,
    handleSearch:(value:string)=>void
}
const Header = ({handleCategory, categoryLabel, handleSearch, search}:Props) => {
  return (
    <header className="header">
        <div className="top-header">
            <h2 className="header-h2">
                    <a href={'/'} className="header-logo">
                        <span className="text-cyan-600">MV</span>
                         NEWS
                    </a>
                </h2>

                <div className=" w-full md:w-1/2 flex justify-center">
                    <input 
                        type="search"  
                        placeholder="buscar" 
                        value={search}
                        onChange={(e)=>handleSearch(e.target.value)}
                        className="header-search"/>
                </div>
        </div>
        <nav className="bg-slate-200 mt-4">
            <ul className="header-list">
                {categories.map(category=>(
                    <li key={category.label} onClick={()=>{handleCategory(category.keyword, category.label)}}
                        className={`header-item ${categoryLabel.label == category.label ? 'font-bold' : null}`}
                    >{category.label}</li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header