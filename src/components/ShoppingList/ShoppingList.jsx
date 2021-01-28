import './ShoppingList.css';

function ShoppingList({ shoppingList, updatePurchased }) {

      const markPurchased = (id, status) => {
        console.log('in mark purchased');
        updatePurchased(id, !status);
    };

function deleteItem(id) {
    console.log('in delete');
}

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
                    {shoppingList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{shoppingList.purchased ? <p>Yes</p> : <p>No</p>}</td>
                        <td><button id="purchased" onClick = {() => markPurchased(item.id)}>{!shoppingList.purchased ? <p>Purchase</p> : <p></p>}</button><button id="delete" onClick = {() => deleteItem(item.id)}>{!shoppingList.purchased ? <p>Delete</p> : <p></p>}</button></td>
                        <td>{item.purchased ? <p>Yes</p> : <p>No</p>}</td>
                        <td>
                            {!item.purchased ? <button onClick = {() => markPurchased(item.id)}><p>Purchase</p></button>:
                            <span><em>Purchased!</em></span>}
                        </td>
                        <td><button onClick = {() => deleteItem(item.id)}><p>Delete</p></button></td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;