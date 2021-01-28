import './ShoppingList.css';

function markPurchased(id) {
    console.log('in mark purchased');
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
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{shoppingList.purchased ? <p>Yes</p> : <p>No</p>}</td>
                        <td><button onClick = {() => markPurchased(item.id)}>Purchase</button></td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;