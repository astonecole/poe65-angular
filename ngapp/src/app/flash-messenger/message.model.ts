export class Message {
    text: string = '';
    type: string;

    constructor(text: string, type: string = 'info') {
        this.text = text;
        this.type = type;
    }
}
