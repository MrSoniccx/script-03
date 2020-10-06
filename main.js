class Carrera {
    constructor(corredor1, corredor2, distancia)
    {
        this.a = corredor1
        this.b = corredor2
        this.distancia = distancia
        this.ad = 0
        this.bd = 0
    }

    random()
    {
        let x = (1 + Math.floor(Math.random()*6))
        let y = (1 + Math.floor(Math.random()*6))

        switch(x)
        {
            case 1:
            this.ad += 3
            break;
            case 2: case 3:
            this.ad += 1
            break;
            case 4: case 5: case 6:
            this.ad += 2
            break;
        }
        switch(y)
        {
            case 1:
            this.bd += 3
            break;
            case 2: case 3:
            this.bd += 1
            break;
            case 4: case 5: case 6:
            this.bd += 2
            break;
        }
    }

    comenzar()
    {
        let ganador = 0
        while(ganador == 0)
        {
            this.random()
            if(this.ad<this.distancia && this.bd<this.distancia)
                console.log("el corredor 1 '"+this.a+"' esta en "+this.ad+" y el corredor 2 '"+this.b+"' esta en "+this.bd);
            else if (this.ad >= this.distancia)
                ganador = 1;
            else if (this.bd >= this.distancia)
                ganador = 2;
            else
                ganador = 3;
        }

        switch(ganador)
        {
            case 1:
                console.log("el corredor 1 '"+this.a+"' Gano la carrera")
                break;
            case 2:
                console.log("el corredor 2 '"+this.b+"' Gano la carrera")
                break;
            case 3:
                console.log("Empate!")
                break;
        }
        
    }
}


let run = new Carrera("pepe","juan",100);
run.comenzar();