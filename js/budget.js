
document.getElementById('player-calculate-btn').addEventListener('click', function () {

    const playerInputField = getInputFieldValueById('player-inputField');
    const totalPlayerCost = playerInputField * 5;

    setTextElementValueById('player-cost-total', totalPlayerCost);


})

document.getElementById('total-Cost-calculte-btn').addEventListener('click', function () {



    const managetCost = getInputFieldValueById('managerInputField');

    const coachCost = getInputFieldValueById('coachInputField');

    const playerExpenses = getTextElementValueById('player-cost-total');

    const totalCost = managetCost + coachCost + playerExpenses;

    setTextElementValueById('total-cost-calculate', totalCost);

})