const playerArray = [];

function display(cartProduct) {

    const tableBody = document.getElementById('products-cart');
    tableBody.innerHTML = '';


    for (let i = 0; i < cartProduct.length; i++) {
        //console.log(playerArray[i].playerName);
        const name = playerArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `

        <th>${i + 1}</th>
        <th>${name}</th>
        
        `;
        tableBody.appendChild(tr);
    }
}


function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    //console.log(pdName);


    const playerObj = {
        playerName: playerName

    }

    playerArray.push(playerObj);

    // console.log(playerArray);
    // console.log(playerArray.length);

    document.getElementById('total-products').innerText = playerArray.length;

    display(playerArray);

}