const API_URL = 'http://localhost:3001/api';



// Hacer solicitud para registrar usuarios
export const registerUser = async (name: string, country: string, adrees: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, country, adrees, email, password  }),
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

// Verificar inicio de sesión
export const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.message);
      localStorage.setItem('token', data.token); // Almacenar el token en localStorage
      return { message: data.message, token: data.token }; // Devuelve el mensaje y el token
    } else {
      console.error(data.message);
      return { message: data.message }; // Devuelve el mensaje de error
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return { message: 'Error al iniciar sesión' }; // Devuelve un mensaje de error genérico
  }
};


export const fetchWithAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  try {
    // Hacer la solicitud al servidor con el token incluido en los headers
    const response = await fetch(`${API_URL}/user/data`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error('Error al realizar la solicitud:', error);
    throw error   
  }
};

export const modifyUser = async (id: string | undefined, newName: string, newAddress: string, newCountry: string) => {
  try {
    const response = await fetch(`${API_URL}/modifyUser`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre: newName,
        direccion: newAddress,
        pais: newCountry
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error updating user');
    }

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error');
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

// Hacer solicitud para obtener un producto por ID
export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};

// Hacer solicitud de los productos en oferta
export const getProductsOferta = async () => {
  try {
    const response = await fetch(`${API_URL}/oferta`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

// Hacer solicitud para obtener un producto en oferta por ID
export const getProductByIdOferta = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/oferta/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};
