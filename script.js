let carrito = [];

function agregarProducto(e)
{
    //Guarda el id de la imagen clickeada y agrega el producto a un array, oculto item al final
    let item = (e.id);   
    carrito.push(item);
    document.getElementById(item).style.visibility = "hidden";

    //Agrega el item a la lista
    let li = document.createElement("li");
    for (let i = 0; i < productos.length; i++)
    {
        if (e.id == productos[i].nombre)
        {
            li.textContent = e.id + " " + productos[i].precio + "$";
        }
    }
    document.getElementById("listaFinal").appendChild(li);

    //Agrega formato de css a elementos de la lista 
    document.getElementById("listaFinal").className = "listaFinal";
}

//Calculo del precio total
function calcularPrecioFinal()
{
    let total = 0;

    for (let i = 0; i < carrito.length; i++)
    {
        for (let j = 0; j < productos.length; j++)
        {
            if (carrito[i] == productos[j].nombre)
            {
                total = total + productos[j].precio;
            }
        }
    }
    console.log(total);

    //Creo elemento h2 para anotar el precio final
    let precioFinal = document.createElement("h2");
    precioFinal.textContent = "Total de la Compra: " + total + "$";
    document.getElementById("precioFinal").appendChild(precioFinal);

    //Formateo con css precio final
    document.getElementById("precioFinal").className = "precioFinal";

    //Oculto boton de compra
    document.getElementById("botonCompra").style.visibility = "hidden";

    //Remover evento de las imagenes despues de calcular precio final
    let imagenes = document.querySelectorAll("img")
    for (let i = 0; i < imagenes.length; i++)
    {
        imagenes[i].removeAttribute("onclick");
    }
}

