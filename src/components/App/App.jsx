import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

        useEffect(() => {
        getShoppingList();
      }, []); 

      let [shoppingList, setShoppingList] = useState([])

      const getShoppingList = () => { 
        axios({
            method: 'GET',
            url: '/list'
        }).then((response)=> {
            console.log(response.data);
            setShoppingList(response.data);
            <ShoppingList/>
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
