const algoliasearch = require('algoliasearch');
const client = algoliasearch('7FLP5FR2IC', 'b8bb0089051ed873c90c1c85cc97cf12');
const index = client.initIndex('products');

// Ejemplo de función para actualizar el índice de Algolia
const updateAlgoliaIndex = async (productId, productData) => {
  try {
    await index.saveObject({
      objectID: productId,
      ...productData,
    });
  } catch (error) {
    console.error('Error updating Algolia index:', error);
    throw error;
  }
};

// Escucha eventos de la base de datos y actualiza Algolia
// Ejemplo: cuando se crea o actualiza un producto en la base de datos
db.on('productCreated', (productId, productData) => {
  updateAlgoliaIndex(productId, productData);
});

