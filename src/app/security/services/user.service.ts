import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { LoggedInAppUser } from '../models/loggedInAppUser';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private firestore: AngularFirestore) { }

    login(user: User): Observable<LoggedInAppUser> {
        return of({} as LoggedInAppUser);
    }

    saveUser(appUser: LoggedInAppUser) {        
        var appUserRef = this.firestore.collection('AppUsers');
        appUserRef.ref.where('email', '==', appUser.email).get().then(data =>{
            if(data.docs.length === 0){
                this.firestore.collection('AppUsers').add(appUser);
            }
            data.docs.forEach(x => {
                if (x.exists) {
                    console.log(x.data());
                }                
            })
        } );

    }

}