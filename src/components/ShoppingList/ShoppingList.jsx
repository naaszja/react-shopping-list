function ShoppingList({ shoppingList }) {


    return (
        <>
            <table className='shoppingList-Table' >
                <tbody>
                    {shoppingList.map(item =>
                    (<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>{item.purchased}</td>
                    </tr>)
                    )}
                </tbody>
            </table>
        </>
    );

}

export default ShoppingList;