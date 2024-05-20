export function isValidDate(value: any) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      return false;
    }
    return true;
  }
  