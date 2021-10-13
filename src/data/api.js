const host = "https://data.bmkg.go.id/DataMKG/TEWS";

export const getGempaTerkini = async () => {
  return await fetch(`${host}/autogempa.json`).then((response) =>
    response.json()
  );
};

export const getGempaDibawah5 = async () => {
  return await fetch(`${host}/gempadirasakan.json`).then((response) =>
    response.json()
  );
};

export const getGempaDiatas5 = async () => {
  return await fetch(`${host}/gempaterkini.json`).then((response) =>
    response.json()
  );
};
