import {Component, OnInit} from '@angular/core';
import {PhoneLink} from '../../../../interfaces/phone-link.interface';
import {LinkService} from '../../services/link.service';

@Component({
  selector: 'el-links-phone',
  templateUrl: './links-phone.component.html',
  styleUrl: './links-phone.component.scss'
})
export class LinksPhoneComponent implements OnInit {
  phoneLinks: PhoneLink[];

  constructor(private _linkService: LinkService) {
    this.phoneLinks = [];
  }

  ngOnInit(): void {
    this.phoneLinks = this._linkService.phoneLinks;
  }
}
