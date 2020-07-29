import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoggedInAppUser } from '../../models/loggedInAppUser';
import { Router } from '@angular/router';

@Component({
    selector: 'user-registration',
    templateUrl: 'user-registration.component.html'
})

export class UserRegistrationComponent implements OnInit {
    @ViewChild('frmLogin') frm: any;
    user: LoggedInAppUser;
    file: any;
    constructor(private userService: UserService, private router: Router, private zone:NgZone) { }

    ngOnInit() {
        this.user = {
            avatar_url: '',
            bio: '',
            blog: '',
            name: '',
            email: '',
            html_url: '',
            twitter_username: '',
            company: '',
            password: '',
            gitAccount: '',
            
        };
    }
    
    uploadFile(event) {
        this.file = event.target.files[0];  
    }

    Submit() { 
        let user: LoggedInAppUser = this.frm.value as LoggedInAppUser;     
        this.userService.saveUser(user).then(() =>         
            {
                this.userService.upload(this.file, user.email).then(
                    (id) => { this.zone.run(() => this.router.navigate(['dashboard', id])); this.Clear(); },
                    () => console.log('error occured'));
            }
        );                
    }
za
    Clear(){        
        this.frm.reset();
    }

}