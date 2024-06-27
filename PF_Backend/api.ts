const API_URL = 'http://localhost:3001/api';

// Hacer solicitud para registrar usuarios
export const signup = async (password: string, email: string) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    });
    if (!response.ok) {
      throw new Error('Error al registrar usuario');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

// Hacer solicitud de los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};


