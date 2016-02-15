function Noticia(titulo, resumen, contenido){
    this.titulo = titulo;
    this.resumen = resumen;
    this.contenido = contenido;
}

Noticia.prototype.getTitulo = function (){
    return this.titulo;
};
Noticia.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
};

Noticia.prototype.toString = function(){
    return "Noticia{'titulo'=" + this.titulo + 
            "'resumen'=" + this.resumen + "}";
};
