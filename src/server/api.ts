export const productOffering = async (accessToken: string) => {
  const response = await fetch('https://85.242.112.72:5681/tmf-api/productCatalogManagement/v4/productOffering/1', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
      Authorization: 'Bearer ' + accessToken,
    },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

//process.env.API_URL + 'tmf-api/productCatalogManagement/v4/productOffering/1'
