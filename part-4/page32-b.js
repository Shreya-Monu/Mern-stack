import {checkBalance,deposit,withdraw} from "./bank.js"
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
withdraw(1, 17000);
checkBalance(1);