// Written by Daniel Dybing, 2024

function isTwentyEight(number) {
    return number === 28;
}

function isTwentyEightYesNo(number)
{
    if (number === 28)
    {
        return "yes";
    }
    else
    {
        return "no";
    }
}

module.exports = {isTwentyEight,isTwentyEightYesNo}
