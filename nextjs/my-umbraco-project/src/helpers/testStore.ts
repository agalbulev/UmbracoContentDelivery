export class TestStore {
    private static _value: string;

    static get Value() {
        return this._value;
    }

    static set Value(value) {
        this._value = value;
    }
}