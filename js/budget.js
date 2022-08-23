
document.getElementById('player-calculate-btn').addEventListener('click', function () {

    const value = getTextElementValueById('total-products');

    const playerInputField = getInputFieldValueById('player-inputField');
    if (isNaN(playerInputField)) {
        alert('You can type only digit');
        return;
    }

    const totalPlayerCost = playerInputField * value;

    setTextElementValueById('player-cost-total', totalPlayerCost);

})

document.getElementById('total-Cost-calculte-btn').addEventListener('click', function () {

    const managetCost = getInputFieldValueById('managerInputField');
    if (isNaN(managetCost)) {
        alert('You can type only digit');
        return;
    }

    const coachCost = getInputFieldValueById('coachInputField');

    if (isNaN(coachCost)) {
        alert('You can type only digit');
        return;
    }

    const playerExpenses = getTextElementValueById('player-cost-total');

    const totalCost = managetCost + coachCost + playerExpenses;

    setTextElementValueById('total-cost-calculate', totalCost);

})