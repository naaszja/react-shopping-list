function Buttons ({resetPurchased, clearList}) {

    return (
        <>
            <button onClick = {resetPurchased}>Reset</button>
            <button onClick = {clearList}>Clear</button>
        </>
    );
};

export default Buttons;