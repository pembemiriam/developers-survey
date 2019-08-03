import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
developerList: AngularFirestoreCollection<any>;


  constructor(private firestore: AngularFirestore, private router: Router ) { }


  myForm = new FormGroup({
    $key: new FormControl(null),
    firstName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
    submissionDate: new FormControl(new Date()),
    birthDate : new FormControl(''),
    role : new FormControl('',Validators.required),
    roleSpecification : new FormControl(''),
    resume : new FormControl('')

  });

  getDevelopers() {
    return this.firestore.collection('developers').snapshotChanges();
    //this.developerList = this.firestore.collection('developers');
  //  return this.developerList.snapshotChanges();
  }

  insertDeveloper(developer){
    console.log("entered inset")
    console.log(this.firestore.collection('developers').snapshotChanges())
      return this.firestore.collection('developers')
      .add({
        firstName: developer.firstName,
        lastName: developer.lastName,
        birthDate: developer.birthDate,
        role: developer.role,
        roleSpecification: developer.roleSpecification,
        resume: developer.resume,
        submissionDate: developer.submissionDate
      });

  }

      
  populateForm(developer){
    //this.router.navigate([''])
    console.log(developer);
    this.myForm.setValue(developer);
    }

    updateDeveloper(developer){
      console.log("updated developer"+developer.$key);
      this.firestore.collection('developers').doc(developer.$key)
      .update(
        {
          firstName: developer.firstName,
        lastName: developer.lastName,
        submissionDate: developer.submissionDate, 
        birthDate: developer.birthDate,
        role: developer.role,
        roleSpecification: developer.roleSpecification,
        resume: developer.resume,
        })


    }

    deleteDeveloper(data){
  
       this.firestore
       .collection("developers")
       .doc(data)
       .delete();
    }

}
