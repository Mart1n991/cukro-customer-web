const baseUrl = "http://localhost:44388";

export const getProductList = async (productCategoryId) => {
  let filter = [{ field: "categoryRefs.id", op: "Eq", value: productCategoryId }];
  let url = `${baseUrl}/api/product?filters=${JSON.stringify(filter)}`;

  let response = await fetch(url);
  let data = await response.json();
  return data;
};

export const getProduct = async (productId) => {
  let url = `${baseUrl}/api/product/${productId}`;

  let response = await fetch(url);
  let product = await response.json();
  return product;
};
