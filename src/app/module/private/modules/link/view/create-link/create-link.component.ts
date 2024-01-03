import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {LinkService} from '../../services/link.service';

@Component({
  selector: 'el-create-link',
  templateUrl: './create-link.component.html',
  styleUrl: './create-link.component.scss'
})
export class CreateLinkComponent implements OnInit {
  public links: { text: string; url: '' }[];
  public linkOptions: { icon: string; text: string }[];

  constructor(private _linkService: LinkService) {
    this.links = [];
    this.linkOptions = [];
  }

  ngOnInit(): void {
    this.linkOptions = this._linkService.options;
    this.links = this._linkService.links;
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.links, event.previousIndex, event.currentIndex);
  }

  addLink(): void {
    this.links.push({text: '', url: ''});
  }
}
