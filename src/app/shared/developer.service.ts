import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {



  constructor(private firestore: AngularFirestore ) { }


  myForm = new FormGroup({
    $key: new FormControl(null),
    firstName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    birthDate : new FormControl(''),
    role : new FormControl('',Validators.required),
    roleSpecification : new FormControl('', Validators.required),
    resume : new FormControl('')

  });

  getDevelopers() {
    return this.firestore.collection('developers').snapshotChanges();
  }

  insertDeveloper(developer){
    console.log("entered inset")
    console.log(this.firestore.collection('developers').snapshotChanges())
      return this.firestore.collection('developers')
      .add(developer);
      

  }



}
