import './ShoppingList.css';

function ShoppingList({ shoppingList, updatePurchased, deleteItem }) {

    let purchasedArray = [];
    let notPurchasedArray = [];

    for (let item of shoppingList) {
        if (item.purchased === true) {
            purchasedArray.push(item);
        } else {
            notPurchasedArray.push(item);
        }
    }

    const sortedList = [...notPurchasedArray, ...purchasedArray];

    const markPurchased = (id, status) => {
        console.log('in mark purchased');
        updatePurchased(id, !status);
    };

    return (
        <>
            <table className='shoppingList-Table' >
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Purchased</th>
                        <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{item.purchased ? <p>Yes</p> : <p>No</p>}</td>
                        <td><button id="purchased" onClick={() => markPurchased(item.id)}>{!shoppingList.purchased ? <p>Purchase</p> : <p></p>}</button><button id="delete" onClick={() => deleteItem(item.id)}>{!shoppingList.purchased ? <p>Delete</p> : <p></p>}</button></td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;