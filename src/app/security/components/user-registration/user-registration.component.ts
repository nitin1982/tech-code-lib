import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-registration',
    templateUrl: 'user-registration.component.html'
})

export class UserRegistrationComponent implements OnInit {
    @ViewChild('frmLogin') frm : any;
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() { }

    Submit(){}
}