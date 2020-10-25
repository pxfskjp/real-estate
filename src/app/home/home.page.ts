import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public title: string;
  appointments$ : Observable<any>; 
  itemRef: AngularFireList<any>; 
  
  constructor(private database: AngularFireDatabase, private activatedRoute: ActivatedRoute) {
    this.itemRef = this.database.list('/appointments');
    this.appointments$ = this.itemRef.snapshotChanges();
  }


  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getBadgeColor(appointment){
    const status = appointment.payload.val().status; 
    return status === 'incomplete' ? 'danger' : status === 'complete' ? 'success' : 'primary';  
  }

  getBadgeLabel(appointment){
    const status = appointment.payload.val().status; 
    return status === 'incomplete' ? 'Incomplete' : status === 'complete' ? 'Completed' : 'Not Started'
  }
}
