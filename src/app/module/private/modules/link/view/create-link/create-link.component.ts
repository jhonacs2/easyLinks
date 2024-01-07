import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {LinkService} from '../../services/link.service';
import {LinkDetail} from '../../../../interfaces/link-detail.interface';
import {Option} from '../../../../interfaces/option.interface';

@Component({
  selector: 'el-create-link',
  templateUrl: './create-link.component.html',
  styleUrl: './create-link.component.scss'
})
export class CreateLinkComponent implements OnInit {
  links: LinkDetail[];
  linkOptions: { icon: string; text: string }[];
  selected: Option;

  constructor(private _linkService: LinkService) {
    this.links = [];
    this.linkOptions = [];
    this.selected = {icon: '', text: ''};
  }

  ngOnInit(): void {
    this.linkOptions = this._linkService.options;
    this.links = this._linkService.links;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.links, event.previousIndex, event.currentIndex);
    this._linkService.changeOrderLinks(this.links);
  }

  addLink(): void {
    this._linkService.addLink({text: '', url: ''});
  }

  updateLinks(inputLink: HTMLInputElement, index: number): void {
    this._linkService.updateLink(inputLink.value, index);
  }

  removeLink(index: number): void {
    this._linkService.deleteLink(index);
  }

  dropDownChange(index: number) {
    // TODO: Update service links
  }
}
