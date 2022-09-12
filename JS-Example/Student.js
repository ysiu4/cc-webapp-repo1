export default class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    result = () => {
        return this.id * 10;
    }
}
