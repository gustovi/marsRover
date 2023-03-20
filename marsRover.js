// NASA va trimite pe Marte mai mulți roboți ce vor explora planeta. Aceștia vor naviga o suprafață dreptunghiulară pentru a colecta diferite date ce vor fi transmise înapoi pe Pământ.

// Poziția unui robot este reprezentată de coordonatele sale x și y, precum și o literă care să desemneze punctul cardinal spre care este orientat (N, E, S, V). Spre exemplu, dacă poziția sa este 0, 0, N, atunci robotul este în colțul din stânga jos al platoului de pe Marte și se îndreaptă spre nord (în sus).

// Pentru a controla robotul, NASA trimite un set de instrucțiuni care pot fi L (schimbarea direcției 90 de grade la stânga), R (90 de grade la dreapta) și M (deplasare cu o unitate și menține direcția). De exemplu, pentru un robot care are coordonatele 0, 0, N, instrucțiunea M va însemna că robotul va avea coordonatele noi 0, 1, N.

// Cerințe:
// Setați coordonatele colțului dreapta sus al platoului dreptunghiular, având colțul stânga jos (0,0).
// Setați poziția robotului pe platou și orientarea sa.
// Pentru o listă de instrucțiuni, afișați poziția finală a robotului.

// Exemplu input:

// 5 5
// 1 2 N
// LMLMLMLMM

// Output așteptat:

// 1 3 N
let marsRover = {
x : 1,
y : 2,
direction : "N"

}
function left(direction){

    if (direction == "N"){
        direction = "V"
    }else if( direction == "V"){
        direction = "S"
    }else if (direction == "S"){
        direction = "E"
    }else {
        direction = "N"
    }
    return direction;
}
 