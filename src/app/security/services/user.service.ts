import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { LoggedInAppUser } from '../models/loggedInAppUser';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private firestore: AngularFirestore, private afStorage: AngularFireStorage) { }

    login(user: User){
        console.log(user);
        var appUserRef = this.firestore.collection('AppUsers');
        appUserRef.ref.where('email', '==', user.userName).where('password', '==', user.password).get().then(data =>{
            if(data.docs.length === 0){
                console.log('No user found');
            }
            data.docs.forEach(x => {
                if (x.exists) {
                    console.log(x.data());
                }                
            })
        } );

    }

    upload(file: any, email: string): Promise<any>{
        var appUserRef = this.firestore.collection('AppUsers');
        var promise = new Promise<any>((resolve, reject) => {
        appUserRef.ref.where('email', '==', email).get().then(data =>{            
            data.docs.forEach(x => {
                if (x.exists) {
                    //console.log(x.id);
                    this.afStorage.upload('/upload/profile_' + x.id + '.jpg', file);                     
                    resolve(x.id);
                }                
            })
        } ).
        catch(
            () => reject('Error OCcured')
        );
        });
        return promise;
        

        
    }

    saveUser(appUser: LoggedInAppUser) {        
        var appUserRef = this.firestore.collection('AppUsers');
        return appUserRef.ref.where('email', '==', appUser.email).get().then(data =>{
            if(data.docs.length === 0){
                this.firestore.collection('AppUsers').add(appUser);
            }else{
                data.docs.forEach(x => {
                    if (x.exists) {
                        console.log(x.id);
                    }                
                })
            }
        } );

    }

}