class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente("Ola", "123", new Conta("3", 2000));
        const c2 = new Cliente("Bom dia", "456", new Conta("4", 40000));
        this.clientes.push(c1, c2);
    }
    inserir(client) {
        this.clientes.push(client);
    }
    remover(numero) {
        const clientRemover = this.pesquisar(numero);
        if (clientRemover) {
            const indiceCliente = this.clientes.indexOf(clientRemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(numero) {
        return this.clientes.find(cliente => cliente.cpf == numero);
    }
    listar() {
        return this.clientes;
    }
}
