
let clienteController = new ClienteController();

clienteController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);


const c2 = new Conta('4', 200);
const p2 = new Poupanca('5', 200);
const cb2 = new ContaBonificada('6', 0);


const c3 = new Conta('7', 200);
const p3 = new Poupanca('8', 200);
const cb3 = new ContaBonificada('9', 0);


const c4 = new Conta('10', 200);
const p4 = new Poupanca('11', 200);
const cb4 = new ContaBonificada('12', 0);



const cliente1 = new Cliente('Henrique','789',c1);
const cliente2 = new Cliente('Sion','999',c2);

const cliente3 = new Cliente('José','1021',c3);
const cliente4 = new Cliente('Maria','555',c4);


clienteController.inserirClienteNoHTML(cliente1);
clienteController.inserirClienteNoHTML(cliente2);
clienteController.inserirClienteNoHTML(cliente3);
clienteController.inserirClienteNoHTML(cliente4);



const array_dependentes = new Array<Cliente>(cliente3,cliente4);

const cliente_especial = new ClienteEspecial(cliente1.nome,cliente1.cpf,c1,array_dependentes);


console.log(cliente_especial.toString());
