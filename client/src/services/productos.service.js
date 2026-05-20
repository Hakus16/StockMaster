const endpoint = "http://localhost:3000/productos";

export async function getProductos() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Error al obtener los productos");
        return await response.json();
    } catch (error) {
        console.error("Error en getProductos:", error);
        throw error;
    }
};

export async function createProducto(producto) {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto)
        });
        if (!response.ok) throw new Error("Error al crear el producto");
        return await response.json();
    } catch (error) {
        console.error("Error en createProducto:", error);
        throw error;
    }
};

export async function updateProducto(id, producto) {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto)
        });
        if (!response.ok) throw new Error("Error al actualizar el producto");
        return await response.json();
    } catch (error) {
        console.error("Error en updateProducto:", error);
        throw error;
    }
};

export async function deleteProducto(id) {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Error al eliminar el producto");
        return true;
    } catch (error) {
        console.error("Error en deleteProducto:", error);
        throw error;
    }
};
