interface Props{
    title:string
}

const Title = ({title}:Props) => {
  return (
    <h2 className='text-2xl text-center uppercase font-bold'>{title}</h2>
  )
}

export default Title