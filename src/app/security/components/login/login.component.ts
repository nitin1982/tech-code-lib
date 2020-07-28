import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
// import { AffiliateNotificationService } from 'src/app/shared/services/affiliate-notification.service';
import { AppSettings } from 'src/app/shared/models/appsettings';
// import { AffiliateAppSettingsService } from 'src/app/shared/services/affiliate-settings.service';
// import { HelpEmailComponent } from 'src/app/shared/components/help-email/help-email.component';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { LoggedInAppUser } from '../../models/loggedInAppUser';

declare const gitLogin: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    @ViewChild('frmLogin') frm : any;
    user: User;    
    forgotPassword: boolean = false;
    signingInProgress: boolean = false;
    loggedIn: boolean = false;
    
    private settings: AppSettings;
    constructor(private userService: UserService, private router: Router) { 
            //this.appSettingsService.getSettings().subscribe(data => this.settings = data);
    }

    ngOnInit(): void { 
        this.user = {userName: '', password: ''};                
    }

    toggleForgotPassword(trueFalse: number){
        this.forgotPassword = (trueFalse == 1);
    }
    Submit(){      
        this.signingInProgress = true;
        let user: User = this.frm.value as User;     
        console.log(user);
        this.Clear();          
        if(this.frm.valid){
            this.userService.login(user).subscribe(val => 
                {   
                    // this.signingInProgress = false;
                    // if(!this.userService.redirectUrl)
                    //     this.userService.redirectUrl = 'AffiliatesPerformance';
                    
                    // if(val){
                    //     if(val.IsNewPassword){
                    //         this.router.navigate(['ResetPassword']);
                    //     }else if(this.userService.redirectUrl){
                    //         this.router.navigate([this.userService.redirectUrl]);
                    //     }
                        
                    // }
                }
            );
        }

        if(this.forgotPassword){
            // if(user.userName == undefined || user.userName == ''){
            //     this.alertService.error(this.settings.incorrectCredentialsForgotPasswordMsg);                              
            // }else{
            //     this.userService.forgotPassword(user.userName).subscribe(data => {
            //         if(data.Success)
            //             this.alertService.info(this.settings.passwordSentToEmailSuccessfullyMsg, false);
            //     });  
            //     this.Clear();   
            // }
        }
    }

    loginGit(){
        gitLogin(environment.firebase).then(data => {
            let loggedInUser: LoggedInAppUser = {
                avatar_url: '',
                bio: '',
                blog: '',
                name: '',
                email: '',    
                html_url: '',
                twitter_username: '',
                company: ''
            };

            loggedInUser.avatar_url = data.avatar_url;
            loggedInUser.bio = data.bio;
            loggedInUser.blog = data.blog;
            loggedInUser.name = data.name;
            loggedInUser.email = data.email;
            loggedInUser.html_url = data.html_url;
            loggedInUser.twitter_username = data.twitter_username;
            loggedInUser.company = data.company;

            //console.log(loggedInUser);
            this.userService.saveUser(loggedInUser);
        });
        
    };
    
    Clear(){
        this.signingInProgress = false;
        this.frm.reset();
    }

    
}
