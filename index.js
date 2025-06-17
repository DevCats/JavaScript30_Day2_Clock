const setDate = () => {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const allHands = document.querySelectorAll('.hand');

    const now = new Date();
    // Get current seconds & calculate value to represent this as degrees
    // Adding 90 to degrees to offset the rotation declared in CSS
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;

    // Dividing by 12 because there are only 12 positions for the hour hand instead of 60
    const hours = now.getHours();
    const hoursDeg = (((hours) / 12) * 360) + 90;

    // Prevents each hand from rotating counterclockwise when they reach the 12 position
    // Used allHands because the minute/hour hand will also only move when the second hand hits 60 seconds
    if (seconds === 0) { allHands.forEach(hand => hand.style.transition = 'none'); }
    // Chose to do this rather than an else statement so the inline style wouldn't be reset every second, just once
    // Setting inline transition to '' defaults it back to what is declared in CSS
    if (seconds === 1) { allHands.forEach(hand => hand.style.transition = ''); }

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);