import {Observable, BehaviorSubject} from 'rxjs';

export class Store<T> {
    state$: Observable<T>;
    private _state$: BehaviorSubject<T>;
    private _storeName: string;

    protected constructor (initialState: T, storeName: string) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
        this.storeName = storeName;

        this.initStorage();
    }

    get state (): T {
        return this._state$.getValue();
    }

    setState (nextState: T): void {
        this._state$.next(nextState);

        this.writeToStorage(nextState);
    }

    set storeName(name: string){
        this._storeName = "my_store_" + name;
    }

    get storeName(){
        return this._storeName;
    }

    writeToStorage(nextState: T){
        localStorage.setItem(this.storeName,JSON.stringify(nextState));
    }

    getDataFromStorage(){
        return JSON.parse(localStorage.getItem(this.storeName));
    }

    initStorage(){
        var getData = this.getDataFromStorage();
        if(!getData){
            this.writeToStorage(this._state$.getValue())
        }else{
            this.setState({
                ...this.getDataFromStorage()
            })
        }
    }
    
}