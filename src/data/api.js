export const getGempaTerkini = async () => {
  const res = await fetch(
    `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`
  ).then((response) => response.json());

  return res;
};

export const getGempaDibawah5 = async () => {
  const res = await fetch(
    `https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`
  ).then((response) => response.json());

  return res;
};

export const getGempaDiatas5 = async () => {
  const res = await fetch(
    `https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`
  ).then((response) => response.json());

  return res;
};
