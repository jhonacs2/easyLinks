import {Component, OnInit, Signal} from '@angular/core';
import {PhoneLink} from '../../../../interfaces/phone-link.interface';
import {LinkService} from '../../services/link.service';
import {ProfileService} from '../../services/profile.service';
import {ProfileDetails} from '../../../../interfaces/profile-details.interface';

@Component({
  selector: 'el-links-phone',
  templateUrl: './links-phone.component.html',
  styleUrl: './links-phone.component.scss'
})
export class LinksPhoneComponent implements OnInit {
  phoneLinks: PhoneLink[];
  profileDetail:Signal<ProfileDetails>

  constructor(private _linkService: LinkService,
              private _profileService: ProfileService) {
    this.phoneLinks = [];
    this.profileDetail = this._profileService.profileDetails
  }

  ngOnInit(): void {
    this.phoneLinks = this._linkService.phoneLinks;
  }
}
