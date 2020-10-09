import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pagina : any;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
  
  this.firestore
  .collection("pagina1")
  .get()
  .subscribe((ss) => {
    ss.docs.forEach((doc) => {
      this.pagina
      = doc.data()
    });
  });
  }
}
