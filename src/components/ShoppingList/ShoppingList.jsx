import './ShoppingList.css';

function markPurchased(id) {
    console.log('in mark purchased');
}

function deleteItem(id) {
    console.log('in delete');
}

function ShoppingList({ shoppingList }) {

    return (
        <>
            <table className='shoppingList-Table' >
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Purchased</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{item.purchased ? <p>Yes</p> : <p>No</p>}</td>
                        <td>
                            {!item.purchased ? <button onClick = {() => markPurchased(item.id)}><p>Purchase</p></button>:
                            <span><em>Purchased!</em></span>}
                        </td>
                        <td><button onClick = {() => deleteItem(item.id)}>{!item.purchased ? <p>Delete</p> : <p></p>}</button></td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;