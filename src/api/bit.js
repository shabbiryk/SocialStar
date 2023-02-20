import "./polyfill"
const { createInstance } = require("dotbit");
const dotbit = createInstance();

// returns object inside array
async function handleBit(userAddress) {
    try {
        const value = await dotbit.records(userAddress);
        return value[0].value;
    } catch (error) {
        return false;
    }
}

export const isBit = (addrs) => {
    return handleBit(addrs);
};