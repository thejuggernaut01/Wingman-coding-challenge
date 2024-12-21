class BaseHelper {
  static formatCurrency(value: number) {
    return `$${value.toFixed(2)}`;
  }
}

export { BaseHelper };
