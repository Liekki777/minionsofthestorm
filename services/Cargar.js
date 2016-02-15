var listaProductos = new Array();

function addProductoOnload(img, i, dive)
{
    var nombre = i;
    var descripcion =i;
    var imagen = img;
    
    listaProductos.push(new Producto(nombre, descripcion, imagen));
    dive.innerHTML = img;
}
function addProducto(img, dive, diveNombre, diveDesrip)
{
  
    var nombre = window.prompt("Dime el nombre de la imagen:", "");
    var descripcion = window.prompt("Dime una descripcion de la imagen", "");
    var imagen = img;
    
    
    listaProductos.push(new Producto(nombre, descripcion, imagen));
    diveNombre.innerHTML = nombre;
    dive.innerHTML = img;
    diveDesrip.innerHTML = descripcion;
}      
