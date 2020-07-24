import { Store } from './store';
import { Injectable } from '@angular/core';

export class FavoritesState{
    users: {
        id: number,
        name: string,
        login: string,
        email?: string,
        avatar_url?: string,
        location?: string,
        html_url?: string,
        bio?: string,
        company?: string,
        followers?: number,
        following?: number,
        blog?: string,
        created_at?: string,
        updated_at?: string
    }[] = [];
}

@Injectable({
    providedIn:"root"
})
export class FavoritesStore extends Store<FavoritesState> {
    constructor(){
        super(new FavoritesState(),"favorites");
    }

    public addUser(user: any): void{
        this.state.users.push(user);

        this.setState(<FavoritesState>{
            ...this.state,
            users:[
                ...this.state.users
            ]
        });
    }

    public removeUser(user: any): void{
        this.setState(<FavoritesState>{
            ...this.state,
            users:[
                ...this.state.users.filter((u) => u.id != user.id)
            ]
        });
    }

    public addOrRemoveUser(user: any): void{
        var find = this.state.users.some((u) => u.id == user.id);

        if(!find){
            this.addUser(user);
        }else{
            this.removeUser(user);
        }

    }

    public getUserById(user: any): boolean{
        return this.state.users.some((u) => u.id == user.id);
    }
}
