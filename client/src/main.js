import './styles/globals.css'
import { alertaExitosa, alertaConfirmacion, alertaError } from './utils/alerts'
import { obtenerProductos, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto } from './services/productos.service.js'
import { actualizarEstadisticas } from './ui/estadisticas.js'
import { pintarLosDatos } from './ui/renderProductos.js'


const nombreInput = document.getElementById("nombre")
const precioInput = document.getElementById("precio")
const stockInput = document.getElementById("stock")
const descriptionInput = document.getElementById("descripcion")
const btnSubmit = document.getElementById("submit")
const inventoryId = document.getElementById("inventory-list")


inventoryId.innerHTML =``

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const nombreEjemplo = nombreInput.value
    const precioEjemplo = precioInput.value
    const stockEjemplo = stockInput.value
    const descriptionEjemplo = descriptionInput.value
    
    const nuevoProducto = {
        nombre: nombreEjemplo,
        precio: precioEjemplo,
        stock: stockEjemplo,
        descripcion: descriptionEjemplo
    }

    console.log(nuevoProducto);
    console.log(nuevoProducto.nombre);

    renderizarFilas(nuevoProducto)
})


function renderizarFilas(producto) {
    inventoryId.innerHTML += `<tr class="hover:bg-slate-50/30 transition-colors group">
                        <td class="px-8 py-6">
                          <div class="flex flex-col">
                            <span class="font-bold text-slate-900">${producto.nombre}</span>
                            <span class="text-xs text-slate-400 mt-1 line-clamp-1 max-w-[300px]">${producto.descripcion}</span>
                          </div>
                        </td>
                        <td class="px-8 py-6 text-center">
                          <span class="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-tight border border-emerald-100">${producto.stock}</span>
                        </td>
                        <td class="px-8 py-6 text-center font-bold text-slate-900">${producto.precio}</td>
                        <td class="px-8 py-6 text-right">
                          <div class="flex justify-end gap-3">
                            <button class="w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100" title="Editar">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button class="w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100" title="Eliminar">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>`
}



// const formulario = document.getElementById("product-form")
// const formTitle = document.getElementById("form-title")
// const submitBtn = formulario.querySelector("button[type='submit']")

// // Campos del formulario
// const nombreProducto = document.getElementById("nombre")
// const precioUnidad = document.getElementById("precio")
// const stock = document.getElementById("stock")
// const descripcionProducto = document.getElementById("descripcion")

// // Tabla de productos
// const tableBody = document.getElementById("inventory-list")

// let editandoId = null

// formulario.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const productoNuevo = {
//         nombre: nombreProducto.value.trim(),
//         precioUnidad: Number(precioUnidad.value),
//         stock: Number(stock.value),
//         descripcion: descripcionProducto.value.trim()
//     }

//     if (editandoId) {
//         guardarCambiosProducto(editandoId, productoNuevo)
//     } else {
//         agregarProducto(productoNuevo)
//     }
// })

// formulario.addEventListener("reset", () => {
//     editandoId = null
//     formTitle.textContent = "Detalles del Producto"
//     submitBtn.textContent = "Guardar Producto"
// })

// tableBody.addEventListener("click", async (e) => {
    
//     if (e.target.closest(".btn-eliminar")) {
//         const id = e.target.closest(".btn-eliminar").dataset.id
//         const confirmado = await alertaConfirmacion()
//         if (confirmado) {
//             borrarProducto(id)
//         }
//     }

//     if (e.target.closest(".btn-editar")) {
//         const id = e.target.closest(".btn-editar").dataset.id
//         await prepararEdicion(id)
//     }
// })

// // GET
// async function traeDatos() {
//     try {
//         const productos = await obtenerProductos()
//         pintarLosDatos(productos)
//         actualizarEstadisticas(productos)
//     } catch (error) {
//         console.error("Error al traer datos:", error)
//         alertaError("Hubo un error al cargar los productos")
//     }
// }

// // POST
// async function agregarProducto(producto) {
//     try {
//         await crearProducto(producto)
//         traeDatos()
//         alertaExitosa("Producto agregado exitosamente")
//         formulario.reset()
//     } catch (error) {
//         console.error("Error al agregar:", error)
//         alertaError("Hubo un error al guardar el producto")
//     }
// }

// // PUT
// async function guardarCambiosProducto(id, producto) {
//     try {
//         await actualizarProducto(id, producto)
//         traeDatos()
//         alertaExitosa("Producto actualizado exitosamente")
//         formulario.reset()
//     } catch (error) {
//         console.error("Error al actualizar:", error)
//         alertaError("Hubo un error al actualizar el producto")
//     }
// }

// // DELETE
// async function borrarProducto(id) {
//     try {
//         await eliminarProducto(id)
//         traeDatos()
//         alertaExitosa("Producto eliminado")
//     } catch (error) {
//         console.error("Error al eliminar:", error)
//         alertaError("Hubo un error al eliminar el producto")
//     }
// }

// // EDIT
// async function prepararEdicion(id) {
//     try {
//         const producto = await obtenerProductoPorId(id)

//         nombreProducto.value = producto.nombre
//         precioUnidad.value = producto.precioUnidad
//         stock.value = producto.stock
//         descripcionProducto.value = producto.descripcion

//         editandoId = id
//         formTitle.textContent = "Editar Producto"
//         submitBtn.textContent = "Actualizar Producto"
//     } catch (error) {
//         console.error("Error al preparar edición:", error)
//         alertaError("Hubo un error al cargar el producto")
//     }
// }

// traeDatos()
