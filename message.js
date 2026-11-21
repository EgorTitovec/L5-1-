export class Message {
    #sender;
    #text;
    #timestamp;

    constructor(sender, text, timestamp) {
        this.#sender = sender;
        this.#text = text;
        this.#timestamp = timestamp;
    }

    get sender() {
        return this.#sender;
    }

    set sender(value) {
        this.#sender = value;
    }

    get text() {
        return this.#text;
    }

    set text(value) {
        this.#text = value;
    }

    get timestamp() {
        return this.#timestamp;
    }

    set timestamp(value) {
        this.#timestamp = value;
    }

    show() {
        console.log(`[${this.#timestamp}] ${this.#sender}: ${this.#text}`);
    }

    delete() {
        for (let key of Object.getOwnPropertyNames(this)) {
            delete this[key];
        }
        Object.setPrototypeOf(this, null);
        console.log("Экземпляр сообщения удален.");
    }

    copy() {
        return this;
    }

    #encryptText() {
        this.#text = "********";
    }

    encrypt() {
        this.#encryptText();
    }

    static clone(instance) {
        return new Message(instance.sender, instance.text, instance.timestamp);
    }
}