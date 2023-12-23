type Observer<T> = (value: T) => void;

class LoginObservable<T> {
    constructor(
        private observers: Observer<T>[] = []
    ) {}

    subscribe(func: Observer<T>): void {
        this.observers.push(func);
        console.log(this.observers);
    }

    unsubscribe(func: Observer<T>): void {
        this.observers = this.observers.filter(observer => observer !== func);
    }

    notify(value: T): void {
        this.observers.forEach(observer => observer(value));
    }
}

export default new LoginObservable();