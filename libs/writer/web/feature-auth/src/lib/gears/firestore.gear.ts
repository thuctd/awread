import { Injectable } from '@angular/core';
import { FirebaseFirestoreAddon } from '../addons';

@Injectable({ providedIn: 'root' })
export class FirestoreGear {
  constructor(private firebaseFirestoreAddon: FirebaseFirestoreAddon) {}

  createId() {
    return this.firebaseFirestoreAddon.createId();
  }
}
