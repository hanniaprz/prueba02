import useCocteles from "./components/hooks/useCocteles";
import Card from "./components/card/card"
import './App.css'

function App() {
  const {cocteles}= useCocteles()

  return (
    <>
      <div className="cards-grid">
        {cocteles.map(p => (
          <Card key={p.idDrink}
          name={p.strDrink}
          image={p.strDrinkThumb}/>
        ))}
      </div>

    </>
  )
}

export default App
