import {Injectable} from '@angular/core';
import {LinkDetail} from '../../../interfaces/link-detail.interface';
import {OptionLink} from '../../../interfaces/option-link-interface';
import {Option} from '../../../interfaces/option.interface';
import {PhoneLink} from '../../../interfaces/phone-link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private _options: OptionLink[];
  private _optionMap: Map<string, OptionLink>;
  private _links: LinkDetail[];
  private _phoneLinks: PhoneLink[];

  constructor() {
    this._links = [];
    this._phoneLinks = [];
    this._optionMap = new Map<string, OptionLink>();
    // TODO: We need to replace this with the request.
    this._options = [
      {
        icon: 'el-link-icon-github',
        text: 'Github',
        background: '#1A1A1A'
      },
      {
        icon: 'el-link-icon-facebook',
        text: 'Facebook',
        background: '#0866ff'
      },
      {
        icon: 'el-link-icon-youtube',
        text: 'Youtube',
        background: '#EE3939'
      }
    ];
    this._createOptionLinkDictionary();
  }


  get options(): Option[] {
    return this._options;
  }

  get phoneLinks(): PhoneLink[] {
    return this._phoneLinks;
  }

  get optionMap(): Map<string, OptionLink> {
    return this._optionMap;
  }

  get links(): LinkDetail[] {
    return this._links;
  }

  addLink(link: LinkDetail): void {
    this._links.push(link);
    this._phoneLinks.push({
      ...link,
      background: this.optionMap.get(link.text)?.background,
      icon: this.optionMap.get(link.text)?.icon
    });
  }

  changeOrderLinks(links: LinkDetail[]): void {
    this._links = links;
    this._phoneLinks = links;
  }

  updateLinkUrl(url: string, index: number): void {
    this._links[index].url = url;
    this._phoneLinks[index] = {...this._links[index], url: url};
  }

  updateLinkText(text: string, index: number): void {
    this._links[index].text = text;
    this._phoneLinks[index] = {
      ...this._links[index],
      text: text,
      background: this.optionMap.get(text)?.background,
      icon: this.optionMap.get(text)?.icon
    };
  }

  deleteLink(index: number): void {
    this._links.splice(index, 1);
    this._phoneLinks.splice(index, 1);
  }

  // TODO: We need to replace this with the request.
  private _createOptionLinkDictionary(): void {
    this._options.forEach(option => this._optionMap.set(option.text, option));
  }
}
