Bank example truffle tests
==========================

Repo contains truffle tests for contract from [Simple Bank Example](https://jarjuk.wordpress.com/2017/12/06/sbuilder-bank/)

Let's add method to check bank's balances to be able write assertments in tests:

```
function getBalance(address address) public constant returns(uint256) {
  return balances[address];
}
```

Initial contract code is available in `contracts/Bank_0.sol`

### Problem 0. Non-payable saveAccount method (not found by sbuilder-eth)

Before fixing logical errors in the contract we have to fix saveAccount() method.
Method saveAccount() is not payable so msg.value doesn't exist in the context.

* Warning throwed by Remix IDE
```
browser/Bank.sol:10:53: Warning: "msg.value" used in non-payable function. Do you want to add the "payable" modifier to this function?
      balances[msg.sender] = balances[msg.sender] + msg.value;
                                                    ^-------^
```
* Validated by test `test/Bank_0_saveAccount_not_payable.js`

Solution: add `payable` modifier to the method

### Problem 1. Non-payable consturctor (not found by sbuilder-eth)

Accordingly to section [3.4. Run 2 for setup3 – Find 1st Bug](https://jarjuk.wordpress.com/2017/12/06/sbuilder-bank/#orgheadline7) sbuilder-eth indicates that it is possible to call constructor and transfer some amount of ether. Unfortunately it is impossible as constructor is not payable.

* Remix IDE gives the same warning:
```
browser/Bank.sol:8:30: Warning: "msg.value" used in non-payable function. Do you want to add the "payable" modifier to this function?
      balances[msg.sender] = msg.value;
                             ^-------^
```
* Validated by `migrations/1516447849_deploy__bank_1.js`. Uncomment line 4 and run `truffle test` and as a result migration will fail with error: `Cannot send value to non-payable constructor`

Solution: add `payable` modifier to the constructor

### Problem 2. this.balance != Sum(this.balances) (found by sbuilder-eth)

In the same section [3.4. Run 2 for setup3 – Find 1st Bug](https://jarjuk.wordpress.com/2017/12/06/sbuilder-bank/#orgheadline7) stated:

"Error analysis: constructor does not update balances variable, and invariant Bank_promise is violated in Bank() constructor."

There is internal variable for every contract called balance. It is updated every time somebody sends funds to a contract. So actual balance of the contract will be updated but this transaction would not be represented in balances map

Validated by migration `migrations/1516449292_deploy__bank_2.js` which sends funds to contract during deployment and test `test/Bank_2_constructor_records_transaction.js`

### Problem 3. Possibility to send funds "recursively" (found by sbuilder-eth)
