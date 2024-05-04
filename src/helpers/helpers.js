const shorten = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
};

const categoryProducts = (products, category) => {
  if (!category) return products;
  return products.filter((product) => product.category === category);
};

const createQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.find((item) => item.id === id);
  if (!index) {
    return false;
  } else {
    return index.quantity;
  }
};

const sumItemes = (state) => {
  const itemsCounter = state.selectedItems.reduce(
    (cur, product) => cur + product.quantity,
    0
  );
  const total = state.selectedItems
    .reduce((cur, product) => cur + product.quantity * product.price, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const productsDetails = (product, id) => {
  return product.find((item) => item.id === id);
};

export {
  shorten,
  searchProducts,
  categoryProducts,
  createQuery,
  createQueryObject,
  quantityCount,
  sumItemes,
  productsDetails,
};
