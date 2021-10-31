class ClienteController {
/*
* 3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar, remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado)
4. Criar o html clientes.html, que terá os inputs para acrescentar para inserir um novo cliente, e inserirá as referências para os arquivos .js necessários
5. Desenvolver a classe ClienteController, que fará a ponte entre a tela e as ações que podem ser feitas em clientes
6. Desenvolver a classe ClienteEspecial, que herda de Cliente e tem uma lista de dependentes (array de Cliente) (mas a tela de Cliente não precisa pensar em colocar os dependentes, apenas um cliente básico)

*
*
*
* */
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumeroConta: HTMLInputElement;
    private inputSaldoConta: HTMLInputElement;
    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputNumeroConta = <HTMLInputElement>document.querySelector("#numConta");
        this.inputSaldoConta = <HTMLInputElement>document.querySelector("#SaldoConta");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value,
            this.inputCpf.value,new Conta(this.inputNumeroConta.value,parseFloat(this.inputSaldoConta.value)));

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
