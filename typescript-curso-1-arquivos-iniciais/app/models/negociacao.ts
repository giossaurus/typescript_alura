export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get  valor(){
        return this.#valor;
    }

    get volume(){
        return this.#quantidade * this.#valor;
    }
}