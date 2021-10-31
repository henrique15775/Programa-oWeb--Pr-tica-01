//let contaController = new ContaController();
//let clienteController = new ClienteController();
//contaController.listar();
/*
clienteController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);


const c2 = new Conta('4', 200);
const p2 = new Poupanca('5', 200);
const cb2 = new ContaBonificada('6', 0);


const cliente1 = new Cliente('Henrique','789',c1);
const cliente2 = new Cliente('Sion','999',c2);
*/

let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

/*
console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
*/