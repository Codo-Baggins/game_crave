export const filterUnnecessaryData = (data) => {
  const refinedVideoGameData = {
    id: data.id,
    name: data.name,
    description: data.description_raw,
    backgroundImage: data.background_image,
    video: data.clip,
    stores: data.stores.map((store) => {
      return { whereToBuy: store.store.name, storeURL: store.store.domain };
    }),
  };
  return refinedVideoGameData;
};
