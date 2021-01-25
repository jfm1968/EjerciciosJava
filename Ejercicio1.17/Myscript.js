class Factura{
    constructor(Cliente,Elementos){
        this.Cliente = Cliente;
        this.Elementos = Elementos;
        this.informacion  =  {
            baseImponible : 0 ,
            iva : 21 ,
            total : 0 ,
            formaPago : "contado"
          } ;
    }

    Calculo(){
        let Base_Imponible = 0
        let Total = 0
        let linea
        for (this.linea of this.Elementos){
            Base_Imponible += this.linea.cantidad * this.linea.precio;
        }
        Total = Base_Imponible + ((Base_Imponible * 16)/100)
        this.informacion.baseImponible = Base_Imponible
        this.informacion.total = Base_Imponible
        alert("Base Imponible" + Base_Imponible + "\n" + "Total:"+ Total)
    }
}

class Cliente{
    constructor(nombre_cliente,direccion,telefono,nif){
        this.nombre_cliente = nombre_cliente;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class Elemento{
    constructor(descripcion,cantidad,precio){
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
    }
}

let Cliente1 = new Cliente("Pepe","Direccion","555344455","71271960c")

var lineas = [];
let Linea1 = new Elemento("Descripcion1",10,10)
let Linea2 = new Elemento("Descripcion2",30,15)
lineas.push(Linea1)
lineas.push(Linea2)

let Factura1 = new Factura(Cliente1,lineas)
Factura1.Calculo()