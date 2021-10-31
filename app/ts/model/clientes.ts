class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente("Ola","123", new Conta("3",2000));
        const c2 = new Cliente("Bom dia","456", new Conta("4",40000));
        this.clientes.push(c1, c2);
    }

    inserir(client: Cliente): void {
        this.clientes.push(client);
    }

    remover(numero: string): void {
        const clientRemover = this.pesquisar(numero);
        if (clientRemover) {
            const indiceCliente = this.clientes.indexOf(clientRemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(numero: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === numero
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}