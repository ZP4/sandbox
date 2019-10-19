export class JsTPS {
  constructor() {
    this.transactionArray = [];
    this.mostRecentTransaction = -1;
    this.performingDo = false;
    this.performingUndo = false;
  }

  isPerfomingDo() {
    return this.performingDo;
  }

  isPerfomingUndo() {
    return this.performingUndo;
  }

  getSize() {
    return this.transactionArray.length;
  }

  getRedoSize() {
    return this.transactionArray.length - this.mostRecentTransaction - 1;
  }

  getUndoSize() {
    return this.mostRecentTransaction + 1;
  }

  hasTransactionToUndo() {
    return this.mostRecentTransaction > 0;
  }

  hasTransactionToRedo() {
    return this.mostRecentTransaction < this.transactionArray.length-1;
  }

  clearAllTransactions() {
    this.transactionArray.splice(0, this.transactionArray.length);
    this.mostRecentTransaction = -1;
  }

  undoTransaction() {
    if (this.hasTransactionToUndo()) {
      this.performingUndo = true;
      this.mostRecentTransaction--;
      this.performingUndo = false;
    }
  }

  doTransaction() {
    if (this.hasTransactionToRedo()) {
      this.performingDo = true;
      this.mostRecentTransaction++;
      this.performingDo = false;
    }
  }

  addTransaction(transactionToAdd) {
    if (
      this.mostRecentTransaction < 0 ||
      this.mostRecentTransaction < this.transactionArray.length - 1
    ) {
      for (
        let i = this.transactionArray.length - 1;
        i > this.mostRecentTransaction;
        i--
      ) {
        this.transactionArray.splice(i, 1);
      }
    }

    this.transactionArray.push(transactionToAdd);

    this.doTransaction();
  }

  peekUndo() {
    if (this.hasTransactionToUndo()) {
      return this.transactionArray[this.mostRecentTransaction-1];
    } else {
      return null;
    }
  }

  peekDo() {
    if (this.hasTransactionToRedo()) {
      return this.transactionArray[this.mostRecentTransaction+1];
    } else {
      return null;
    }
  }
}

export default JsTPS;
