import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-display',
  templateUrl: './dashboard-display.component.html',
  styleUrls: ['./dashboard-display.component.scss']
})
export class DashboardDisplayComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.items = this.firestore.collection('items').valueChanges();
  }

}
