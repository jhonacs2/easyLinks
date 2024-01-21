import {Component, OnInit, Signal} from '@angular/core';
import {PhoneLink} from '../../../../interfaces/phone-link.interface';
import {LinkService} from '../../services/link.service';
import {ProfileService} from '../../services/profile.service';
import {ProfileDetails} from '../../../../interfaces/profile-details.interface';

@Component({
  selector: 'el-preview-link',
  templateUrl: './preview-link.component.html',
  styleUrl: './preview-link.component.scss'
})
export class PreviewLinkComponent implements OnInit {
  profileDetail:Signal<ProfileDetails>
  phoneLinks: PhoneLink[];

  constructor(private _profileService: ProfileService,
              private _linkService: LinkService) {
    this.phoneLinks = [];
    this.profileDetail = this._profileService.profileDetails
  }

  ngOnInit(): void {
    this.phoneLinks = this._linkService.phoneLinks;
  }
}
