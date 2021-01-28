
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx'

function App() {

    useEffect(() => {
        getShoppingList();
    }, []);

    let [shoppingList, setShoppingList] = useState([])

    const getShoppingList = () => {
        axios({
            method: 'GET',
            url: '/list'
        }).then((response) => {
            console.log(response.data);
            setShoppingList(response.data);
        })
    }
    const addListItem = (NewItem) => {
        console.log(NewItem);
        // POST your data here
        axios({
            method: 'POST',
            url: '/list',
            data: {
                name,
                quantity,
                unit,
            }
        }).then(response => {
            getShoppingList();
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ShoppingList shoppingList={shoppingList} />
            </main>
        </div>
    );
}

export default App;
