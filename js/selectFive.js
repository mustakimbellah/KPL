const playerArray = [];

function display(cartProduct) {

    const tableBody = document.getElementById('products-cart');
    tableBody.innerHTML = '';

    for (let i = 0; i < cartProduct.length && i < 5; i++) {
        console.log(playerArray[i].playerName);

        if (playerArray.length > 5) {
            alert("You are click more than five times");
            return;
        }

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

    const playerObj = {
        playerName: playerName

    }

    if (playerArray.length == 5) {
        alert("You are click more than five times");
        return;

    }

    element.setAttribute('disabled', true);
    element.classList.add('bg-amber-800');

    playerArray.push(playerObj);


    document.getElementById('total-products').innerText = playerArray.length;

    display(playerArray);

}