const playerArray = [];

function display(cartProduct) {

    const tableBody = document.getElementById('products-cart');
    tableBody.innerHTML = '';


    for (let i = 0; i < cartProduct.length; i++) {
        console.log(playerArray[i].playerName);
        if (i === 5) {         //i == 5
            return;
        }
        else if (playerArray.length > 5) {
            alert("You are click more than five times");

        }
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `

        <th>${i + 1}</th>
        <th>${name}</th>
        
        `;
        tableBody.appendChild(tr);
    }
    // else if (playerArray.length > 5) {
    //     alert("You are click more than five times");

    // }


}


function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName

    }

    playerArray.push(playerObj);

    // if (i == 5) {
    //     return;
    // }
    // if (playerArray.length > 5) {
    //     alert("You are click more than five times");

    // }

    document.getElementById('total-products').innerText = playerArray.length;

    display(playerArray);

}