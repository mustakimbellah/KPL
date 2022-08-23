
document.getElementById('player-calculate-btn').addEventListener('click', function () {

    const value = getTextElementValueById('total-products');

    const playerInputField = getInputFieldValueById('player-inputField');
    if (isNaN(playerInputField)) {
        alert('Not Number');
        return;
    }

    const totalPlayerCost = playerInputField * value;

    setTextElementValueById('player-cost-total', totalPlayerCost);

})

document.getElementById('total-Cost-calculte-btn').addEventListener('click', function () {

    const managetCost = getInputFieldValueById('managerInputField');
    if (isNaN(managetCost)) {
        alert('Not Number');
        return;
    }

    const coachCost = getInputFieldValueById('coachInputField');

    if (isNaN(coachCost)) {
        alert('Not Number');
        return;
    }

    const playerExpenses = getTextElementValueById('player-cost-total');

    const totalCost = managetCost + coachCost + playerExpenses;

    setTextElementValueById('total-cost-calculate', totalCost);

})