export class ServiceBody {
    id: number;
    name: string;
    eventsUrl: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
