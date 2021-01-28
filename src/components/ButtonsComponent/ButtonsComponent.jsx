function Buttons ({resetPurchased}) {

    const clearList = () => {
        console.log('In clearList');
    };

    return (
        <>
            <button onClick = {resetPurchased}>Reset</button>
            <button onClick = {clearList}>Clear</button>
        </>
    );
};

export default Buttons;