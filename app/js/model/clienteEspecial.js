class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, lista) {
        super(nome, cpf, conta);
        this.lista = lista;
    }
    toString() {
        return `Lista de dependentes de ${this.nome} -> ${this.lista}\n`;
    }
}
