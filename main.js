//DESAFÍO ENTREGABLE - CLASES CON ECMASCRIPT Y ECMASCRIPT AVANZADO.

class ProductManager {
    constructor() {
        this.products = []
    }
    
    getProducts() {
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const id_product = this.products.length + 1
        
        //Validamos que el code no se repita.
        const found_product = this.products.find((product) => product.code === code)

        if (found_product) {
            console.log(`Error: El código ${code} ya existe.`);
            return
        }

        const product = {
            id: id_product,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //Validamos campos vacíos.
        let validarCampos = true

        Object.values(product).forEach((e) => {
            if (e.toString().trim() === "" || (e.toString().trim() === "0")) {
                validarCampos = false
            }
        })

        //Luego de validar lo agregamos al array
        if (validarCampos) {
            console.log("El producto ha sido registrado correctamente.");
            this.products.push(product)
        } else {
            console.log("Error: Uno o más campos están vacíos.");
        }
    }

    getProductById(id_product) {
        const found_productById = this.products.find((product) => product.id == id_product);

        if (!found_productById) {
            console.log("Error: Not found.");
            return
        } else {
            console.log("Producto encontrado correctamente:");
            console.log(found_productById)
        }
    }

}

//Ejecución
const productManager = new ProductManager;

//Agregamos un producto
productManager.addProduct("Zapatillas", "Adidas negras", 25000, "urlImagen", "A4250", 20);
productManager.addProduct("Buzo", "Nike gris", 10000, "urlImagen", "B4020", 20);
productManager.addProduct("Camiseta", "Selección Argentina titular", 15000, "urlImagen", "C1010", 10);

//Obtener productos creados
console.log(productManager.getProducts());

//Buscar un producto por ID
productManager.getProductById(2);