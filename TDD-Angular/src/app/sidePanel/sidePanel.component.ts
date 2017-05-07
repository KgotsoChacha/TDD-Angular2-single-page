import {Component} from '@angular/core'


@Component({
    selector: 'side-panel',
    templateUrl: './sidePanel.component.html',
    styleUrls: ['./sidePanel.component.scss']
})
export class SidePanelComponent{
    public ExploreisCollapsed:boolean = true;
 
  public Exporecollapsed(event:any):void {
    console.log(event);
  }
 
  public Exploreexpanded(event:any):void {
    console.log(event);
  }

    public isCollapsed:boolean = true;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
}