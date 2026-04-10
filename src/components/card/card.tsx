import "./card.css"

interface Props{
  name: string,
  image: string,
}

function Card({name,image}:Props) {
  return (
    <>
    <div className = "card">
      <img src={image} alt={name}/>
      <div className = "card-info">
        <h3>{name}</h3>
      </div>
    </div>
    </>
  )
}

export default Card
