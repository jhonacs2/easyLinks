import {Injectable, signal, Signal} from '@angular/core';
import {ProfileDetails} from '../../../interfaces/profile-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profileDetails: Signal<ProfileDetails>;

  constructor() {
    this._profileDetails = signal({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  get profileDetails(): Signal<ProfileDetails> {
    return this._profileDetails;
  }

  set profileDetails(value: Signal<ProfileDetails>) {
    this._profileDetails = value;
  }
}
