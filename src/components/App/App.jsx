import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import Buttons from '../ButtonsComponent/ButtonsComponent.jsx';

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
            setNewItemName('');
            setNewItemUnit('');
            setNewItemQuantity('');
        })
    }
    const updatePurchased = (id, change) => {
        axios({
            method: 'PUT',
            url: `/list/update/${id}`,
            data: {
                purchasedChange: change
            }
        }).then(response => {
            getShoppingList();
        });
    };
    const resetPurchased = () => {
        axios({
            method: 'PUT',
            url: `/list/reset`,
        }).then(response => {
            console.log('Reset list succsessfully');
            getShoppingList();
        });
    };

    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/list/clear'
        }).then(() => {
            console.log('Cleared list successfully');
            getShoppingList();
        });
    };

    const deleteItem = (itemId) => {
        axios({
            method: "DELETE",
            url: `/list/delete/${itemId}`,
        }).then((response) => {
            console.log(response.data);
             getShoppingList();
        })
    };

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm
                    newItemName={newItemName}
                    newItemQuantity={newItemQuantity}
                    newItemUnit={newItemUnit}
                    setNewItemName={setNewItemName}
                    setNewItemQuantity={setNewItemQuantity}
                    setNewItemUnit={setNewItemUnit}
                    addListItem={addListItem}
                />
                <Buttons resetPurchased={resetPurchased} clearList={clearList} />
                <ShoppingList deleteItem={deleteItem} shoppingList={shoppingList} updatePurchased={updatePurchased} />
            </main>
        </div>
    );
}

export default App;
