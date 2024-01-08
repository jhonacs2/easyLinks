import {Injectable} from '@angular/core';
import {LinkDetail} from '../../../interfaces/link-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private _options: { icon: string, text: string, background?: string }[];
  private _links: LinkDetail[];

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

  get links(): LinkDetail[] {
    return this._links;
  }

  addLink(link: LinkDetail): void {
    this._links.push(link);
  }

  changeOrderLinks(links: LinkDetail[]): void {
    this._links = links;
  }

  updateLinkUrl(url: string, index: number): void {
    this._links[index].url = url;
  }

  updateLinkText(text: string, index: number): void {
    this._links[index].text = text;
  }

  deleteLink(index: number): void {
    this._links.splice(index, 1);
  }
}
