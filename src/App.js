import './App.css';
import img1 from '../src/img/pizza1.jpg'
import PizzaCard from '../src/components/PizzaCard'

function App() {
  
  return (
    <>
    <PizzaCard img={img1} title='Пепперони' description='Ничего лишнего! Tоматный соус, колбаски Пепперони и Моцарелла' price='От 550р'/>
    </>
  );
}

export default App;
