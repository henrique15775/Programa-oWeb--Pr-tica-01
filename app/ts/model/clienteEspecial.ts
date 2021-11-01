class ClienteEspecial extends Cliente{
    private lista:  Array<Cliente>;
    constructor(nome:string, cpf:string, conta:Conta, lista: Array<Cliente>) {
        super(nome,cpf,conta);
        this.lista = lista;
    }


    toString(){
        return `Lista de dependentes de ${this.nome} -> ${this.lista}\n`
    }
}
