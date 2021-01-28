import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';

function App() {

    useEffect(() => {
        getShoppingList();
    }, []);
    let [shoppingList, setShoppingList] = useState([])
    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
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
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/list',
            data: {
                name: newItemName,          
                quantity: newItemQuantity,
                unit: newItemUnit,
            }
        }).then(response => {
            getShoppingList();
        })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm 
                    newItemName = {newItemName}
                    newItemQuantity = {newItemQuantity}
                    newItemUnit = {newItemUnit}
                    setNewItemName = {setNewItemName}
                    setNewItemQuantity = {setNewItemQuantity}
                    setNewItemUnit = {setNewItemUnit}
                    addListItem = {addListItem}
                />
                <ShoppingList shoppingList={shoppingList}/>
            </main>
        </div>
    );
}

export default App;
