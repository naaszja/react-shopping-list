import './ShoppingList.css';

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
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{shoppingList.purchased ? <p>In Cart</p> : <p>No</p>}</td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;