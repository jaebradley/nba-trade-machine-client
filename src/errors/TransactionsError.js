class TransactionsError extends Error {
  constructor(errorReasons) {
    super(errorReasons);
    this.name = 'TransactionsError';
    this.errorReasons = errorReasons;
  }
}

export default TransactionsError;
