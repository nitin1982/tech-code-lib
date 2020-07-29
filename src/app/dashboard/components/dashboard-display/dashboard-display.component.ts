import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-display',
  templateUrl: './dashboard-display.component.html',
  styleUrls: ['./dashboard-display.component.scss']
})
export class DashboardDisplayComponent implements OnInit {
  items: Observable<any[]>;
  url: Observable<string>;
  constructor(private firestore: AngularFirestore, private afStorage: AngularFireStorage, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.items = this.firestore.collection('items').valueChanges();
    this.route.params.pipe(map(x => x.id)).subscribe(
      (id) => {
        //console.log('/upload/profile_' + id + '.jpg');
        this.url = this.afStorage.ref('upload/profile_' + id + '.jpg').getDownloadURL();
    });
    
  }

}
