export const productOffering = async () => {
  const response = await fetch(process.env.API_URL + 'tmf-api/productCatalogManagement/v4/productOffering/1', {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
