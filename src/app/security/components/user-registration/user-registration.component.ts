import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { LoggedInAppUser } from '../../models/loggedInAppUser';

@Component({
    selector: 'user-registration',
    templateUrl: 'user-registration.component.html'
})

export class UserRegistrationComponent implements OnInit {
    @ViewChild('frmLogin') frm: any;
    user: LoggedInAppUser;

    constructor(private userService: UserService) { }

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
            gitAccount: ''
        };
    }

    Submit() { 
        
        let user: LoggedInAppUser = this.frm.value as LoggedInAppUser;     
        console.log(user);
        this.userService.saveUser(user);
        this.Clear();          
    }

    Clear(){        
        this.frm.reset();
    }

}