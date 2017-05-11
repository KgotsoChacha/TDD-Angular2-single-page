import {Component} from '@angular/core'


@Component({
    selector: 'side-panel',
    templateUrl: './sidePanel.component.html',
    styleUrls: ['./sidePanel.component.scss']
})
export class SidePanelComponent{
    hideLibraryOptions = true;
    hideExploreOptions = true;

    showOptions(option:string){
      if(option == "Library"){
        this.hideLibraryOptions  ? this.hideLibraryOptions = false : this.hideLibraryOptions = true
      }else if(option == "Explore"){
        this.hideExploreOptions  ? this.hideExploreOptions = false : this.hideExploreOptions = true
      }
    }
}