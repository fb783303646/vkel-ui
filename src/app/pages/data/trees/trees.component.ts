import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from './../../../services/data/data.service';
import { TreeNode } from './../../../models/treenode';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreesComponent implements OnInit {
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.filesTree = await this.dataService.getFilesTree();
  }

  nodeSelect(event) {
    console.log(event);
  }

  nodeUnselect(event) {
    console.log(event);
  }

}
