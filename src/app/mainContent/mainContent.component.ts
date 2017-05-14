import {Component} from '@angular/core';


@Component({
    selector: 'main-content',
    templateUrl: './mainContent.component.html',
    styleUrls: ['./mainContent.component.scss']
})
export class MainContentComponent{
    movieList = ["Finding Dory", "Saint", "Forest", "Band of Robbers", "Norm of the North","Batman"];
}