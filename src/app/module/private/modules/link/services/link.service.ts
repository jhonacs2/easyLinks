import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private _options: { icon: string, text: string }[];
  private _links: { text: string, url: '' }[];

  constructor() {
    this._links = [];
    // TODO: Replace options with options obtained from backend
    this._options = [
      {
        icon: 'el-link-icon-github',
        text: 'Github'
      },
      {
        icon: 'el-link-icon-facebook',
        text: 'Facebook'
      },
      {
        icon: 'el-link-icon-youtube',
        text: 'Youtube'
      }
    ];
  }


  get options(): { icon: string; text: string }[] {
    return this._options;
  }

  set options(value: { icon: string; text: string }[]) {
    this._options = value;
  }

  get links(): { text: string; url: '' }[] {
    return this._links;
  }

  addLink(link: { text: string, url: '' }): void {
    this._links.push(link);
  }
}
