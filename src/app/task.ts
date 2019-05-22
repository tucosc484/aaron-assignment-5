export class Task {
    constructor(
        public id: string,
        public dateCreated: Date,
        public description: string,
        public isComplete: boolean,
        public dateCompleted: Date
    ) {}
}
