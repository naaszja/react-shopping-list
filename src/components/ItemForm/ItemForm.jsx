function ItemForm(props) {
    console.log('ItemForm props:', props);
    return (
        <form onSubmit={props.addListItem}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                value={props.newItemName}
                onChange={(event) => props.setNewItemName(event.target.value)} required />
            <label htmlFor="quantity">Quantity:</label>
            <input
                id="quantity"
                value={props.newItemQuantity}
                onChange={(event) => props.setNewItemQuantity(event.target.value)} required />
            <label htmlFor="unit">Unit:</label>
            <input
                id="unit"
                value={props.newItemUnit}
                onChange={(event) => props.setNewItemUnit(event.target.value)} required />
            <button type="submit">Add New Item</button>
        </form>
    )
}

export default ItemForm;
