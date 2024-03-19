export default class Utility {
  constructor() {}

  onValidateField(value: string) {
    if (value.trim().length > 0) return true;
    else return false;
  }

  jsonConsoleLog(msg: string, value: any) {
    console.log(`${msg}: `, JSON.stringify(value, null, 2));
  }
}
