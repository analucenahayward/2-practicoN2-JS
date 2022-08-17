// Ingresar un dni debe ser entre 0 y 99999999

// calcular el resto de la division entera entre el numero 1 y el numero 23

// el resultado 0 a 22, corresponde a un de las siguientes letras (T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E)

// si el dni cargado no es un numero mostrar con un alert

//repetir todo el proceso hasta que el usuario presione cancelar

console.log(confirm('¿Desea ingresar un DNI?'));

    let numero = parseInt (prompt('Ingrese un numero de DNI, entre(0 y 99999999)'));
    console.log(numero);
    
    if(Number(numero)==numero){
        numero=Number(numero);
    
        if(numero >= 0 && numero <= 999999999){
            let resultado = numero % 23;
            console.log(resultado);
        
            switch(resultado){
                case 0:
                    document.write('La letra que corresponde a su DNI es la T, DNI ingresado '+numero);
                    console.log('T');
                    break;
            
                case 1:
                    document.write('La letra que corresponde a su DNI es la R, DNI ingresado '+numero);
                    console.log('R');
                    break;
                
                case 2:
                    document.write('La letra que corresponde a su DNI es la W, DNI ingresado '+numero);
                    console.log('W');
                    break;
            
                case 3:
                    document.write('La letra que corresponde a su DNI es la A, DNI ingresado '+numero);
                    console.log('A');
                    break;
            
                case 4:
                    document.write('La letra que corresponde a su DNI es la G, DNI ingresado '+numero);
                    console.log('G');
                    break;
                case 5:
                    document.write('La letra que corresponde a su DNI es la M, DNI ingresado '+numero);
                    console.log('M');
                    break;
                case 6:
                    document.write('La letra que corresponde a su DNI es la Y, DNI ingresado '+numero);
                    console.log('Y');
                    break;
                case 7:
                    document.write('La letra que corresponde a su DNI es la F, DNI ingresado '+numero);
                    console.log('F');
                    break;
                case 8:
                    document.write('La letra que corresponde a su DNI es la P, DNI ingresado '+numero);
                    console.log('P');
                    break;
                case 9:
                    document.write('La letra que corresponde a su DNI es la D, DNI ingresado '+numero);
                    console.log('D');
                    break;
                case 10:
                    document.write('La letra que corresponde a su DNI es la X, DNI ingresado '+numero);
                    console.log('X');
                    break;
                case 11:
                    document.write('La letra que corresponde a su DNI es la B, DNI ingresado '+numero);
                    console.log('B');
                    break;
                case 12:
                    document.write('La letra que corresponde a su DNI es la N, DNI ingresado '+numero);
                    console.log('N');
                    break;
                case 13:
                    document.write('La letra que corresponde a su DNI es la J, DNI ingresado '+numero);
                    console.log('J');
                    break;
                case 14:
                    document.write('La letra que corresponde a su DNI es la Z, DNI ingresado '+numero);
                    console.log('Z');
                    break;
                case 15:
                    document.write('La letra que corresponde a su DNI es la S, DNI ingresado '+numero);
                    console.log('S');
                    break;
                case 16:
                    document.write('La letra que corresponde a su DNI es la Q, DNI ingresado '+numero);
                    console.log('Q');
                    break;
                case 17:
                    document.write('La letra que corresponde a su DNI es la V, DNI ingresado '+numero);
                    console.log('V');
                    break;
                case 18:
                    document.write('La letra que corresponde a su DNI es la H, DNI ingresado '+numero);
                    console.log('H');
                    break;
                case 19:
                    document.write('La letra que corresponde a su DNI es la L, DNI ingresado '+numero);
                    console.log('L');
                    break;
                case 20:
                    document.write('La letra que corresponde a su DNI es la C, DNI ingresado '+numero);
                    console.log('C');
                    break;
                case 21:
                    document.write('La letra que corresponde a su DNI es la K, DNI ingresado '+numero);
                    console.log('K');
                    break;
                case 22:
                    document.write('La letra que corresponde a su DNI es la E, DNI ingresado '+numero);
                    console.log('E');
                    break;
                default:
                    alert('ingresaste una opcion erronea')
        
                    // me falta else y alert
        }
        
        } 

        alert('Numero:'+ numero + ',Letra:' + letra);
    }

    else{
        if(numero!= undefined){
            alert('No es un numero');
        }
    }

   