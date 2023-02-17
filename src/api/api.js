import axios from "axios";

const getReq = async (chooseUrl) => {
    const result = await axios.get(chooseUrl);
    return result;
};
const handleHttpOperation = async (chooseUrl, method) => {
    switch (method) {
        case "GET":
            return await getReq(chooseUrl);
        case "POST":
            break;
        default:
            throw Error(
                "Error: While choosing HTTP Method only supports GET and POST"
            );
    }
};
export const makeCalls = async (chooseUrl, method) => {
    const apiResponse = await handleHttpOperation(chooseUrl, method);
    console.log(apiResponse.data.result);
    return apiResponse.data.result;
};