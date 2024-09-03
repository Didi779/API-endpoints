export function getCharacterSorter(email) {
  const apiUrl = `https://api-endpoints-ogetqm3wy-didimalang-pheles-projects.vercel.app/api/character-sorter`;
  const params = { email };

  axios.get(apiUrl, { params })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
