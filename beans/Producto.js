// nombre, descripcion, imagen

function Producto(nombre, descripcion, imagen)
{
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
}

Producto.prototype.getNombre = function(){
    return this.nombre;
};

Producto.prototype.setNombre = function(nombre){
    this.nombre = nombre;
};

Producto.prototype.getDescripcion = function(){
   return this.descripcion;
};

Producto.prototype.setDescripcion = function(descripcion){
    this.descripcion = descripcion;
};

Producto.prototype.getImagen = function(){
   return this.imagen;  
};
Producto.prototype.setImagen = function(imagen){
    this.imagen = imagen;
};
