
export class Tienda {
    constructor(nombre) {
        this._nombre = nombre;
        this._categorias = [];
    }
    getNombre() {
        return this._nombre;
    }
    getCategorias() {
        return this._categorias;
    }
    setCategria(categoria) {
        this._categorias.push(categoria);
    }
};



