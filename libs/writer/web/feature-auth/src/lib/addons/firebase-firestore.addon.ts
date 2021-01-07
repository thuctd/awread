import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class FirebaseFirestoreAddon {
  constructor(private firestore: AngularFirestore) {}

  createId() {
    return this.firestore.createId();
  }
}
