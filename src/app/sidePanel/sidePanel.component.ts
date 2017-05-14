import { Component } from '@angular/core'


@Component({
  selector: 'side-panel',
  templateUrl: './sidePanel.component.html',
  styleUrls: ['./sidePanel.component.scss']
})
export class SidePanelComponent {
  hideLibraryOptions = true;
  hideExploreOptions = true;
  libraryCaretPostion = "caret-right";
  exploreCaretPostion = "caret-right";

  showOptions(option: string) {
    if (option == "Library") {
      this.hideLibraryOptions ? this.hideLibraryOptions = false : this.hideLibraryOptions = true
      this.libraryCaretPostion == "caret-right" ? this.libraryCaretPostion = "caret-down" : this.libraryCaretPostion = "caret-right";
    } else if (option == "Explore") {
      this.hideExploreOptions ? this.hideExploreOptions = false : this.hideExploreOptions = true
      this.exploreCaretPostion == "caret-right" ? this.exploreCaretPostion = "caret-down" : this.exploreCaretPostion = "caret-right";
    }
  }
}