import {Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {ProfileDetails} from '../../../interfaces/profile-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profileDetails: WritableSignal<ProfileDetails>;

  constructor() {
    this._profileDetails = signal({
      firstName: '',
      lastName: '',
      email: '',
      image:undefined
    });
  }

  get profileDetails(): Signal<ProfileDetails> {
    return this._profileDetails;
  }

  setProfileDetails(profileDetails: ProfileDetails): void {
    this._profileDetails.set(profileDetails);
  }
}
