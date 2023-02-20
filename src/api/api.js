import axios from "axios";
// const baseRss3Url = https://api.rss3.io/v1/notes/${}?limit=30&tag=social&platform=${}&include_poap=false&count_only=false&query_status=false
// const farcstrStaticUrl =
//   "https://api.rss3.io/v1/notes/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045?limit=30&tag=social&platform=farcaster&include_poap=false&count_only=false&query_status=false";
// const farcstrStaticProfileUrl =
//   "https://api.rss3.io/v1/profiles/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
// const lensStaticUrl =
//   "https://api.rss3.io/v1/notes/0x50b6a381993834C623b2Bded6825824C936E48bB?limit=30&tag=social&type=post&include_poap=false&count_only=false&query_status=false";
// const lensStaticProfileUrl =
//   "https://api.rss3.io/v1/profiles/0x50b6a381993834C623b2Bded6825824C936E48bB";
const makeNotesUrl = (platform, address) => {
    return `https://api.rss3.io/v1/notes/${address}?limit=30&tag=social&platform=${platform}&include_poap=false&count_only=false&query_status=false`;
};
const makeProfileUrl = (address) => {
    return `https://api.rss3.io/v1/profiles/${address}`;
};
const nullPlatformUrl = (address) => {
    return `https://api.rss3.io/v1/notes/0x000000A52a03835517E9d193B3c27626e1Bc96b1?limit=100&include_poap=false&count_only=false&query_status=false`;
};
const sanitationFunction = (platform, address) => {
    if (platform.length > 0) {
        return makeNotesUrl(platform, address);
    } else {
        return nullPlatformUrl(address);
    }
};
export const getUrl = (urlType, platform, address) => {
    switch (parseInt(urlType)) {
        case 0:
            return sanitationFunction(platform, address);
        case 1:
            return makeProfileUrl(address);
        default:
            console.log("Please pass on params from 0 to 1");
    }
};

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