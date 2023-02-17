export const filterApiResponse = (data) => {
    return data.filter((singleData) => {
        return (
            singleData.platform === "Lens" || singleData.platform === "farcaster"
        );
    });
};