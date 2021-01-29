import "./ButtonComponent.css"
import Swal from 'sweetalert2'
function Buttons({ resetPurchased, clearList }) {

    return (
        <>
            <button id="reset" onClick={()=>Swal.fire({title: 'Are you sure you want to reset purchases?', text: 'All purchases will be reverted.', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes!'}).then((result) => {if (result.value) {resetPurchased()}})}>Reset</button>
            <button id="clear" onClick={()=>Swal.fire({title: 'Are you sure you want to clear all items?', text: 'All purchases will be lost forever.', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes!'}).then((result) => {if (result.value) {clearList()}})}>Clear</button>
        </>
    );
};

export default Buttons;