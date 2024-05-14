import React from "react";
import { useState } from 'react';


function PizzaCard (props){
    
    const [counter, setCounter] = useState(0);

    function increment(){
      setCounter(counter + 1);
    }
  
    function decrement(){
      setCounter(counter - 1);
    }

    function MoveToBasket(counter){
        alert(`Количество заказанного товара: ${counter}`)
    }
  
    return (
        <div className='card'>
            <img src={props.img}/>
            <h2 class="name">{props.title}</h2>
            <h3 class="discription">{props.description}</h3>

            <div class="diametr">
              <select class="selector">
                <option value="" selected disabled>Диаметр</option>
                <option>25 см</option>
                <option>30 см</option>
                <option>35 см</option>
              </select>
            </div>

            <h2 class="price">{props.price}</h2>

            
            <div class="order">

                <div class="counter">
                  <div class="sign"><button class="minus" onClick={decrement}></button></div>
                  <div class="number">{counter}</div>
                  <div class="sign"><button class="plus" onClick={increment}></button></div>               
                </div>

                <dev class="busck"><button class="buscket" onClick={ () => MoveToBasket(counter) }></button></dev>

            </div>
            
        </div>
      );

}

export default PizzaCard;