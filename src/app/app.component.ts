import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { UiService } from './services/ui.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {title:string = 'sensei-ng';
sidebarActive:boolean = true;
hideOverflow:boolean = false;
showCssAnim:boolean = true;
darkTheme:boolean = false;

constructor(
  private route: ActivatedRoute,
  private router: Router
  ){
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        console.log('router start')
          this.hideOverflow = false;
      }
    });
    this.route.paramMap.subscribe(params => {
      console.log("app", params);
      //if params.view then disable animation
      this.showCssAnim = params.get('view') ? false : true;
    });
    //set default theme
    UiService.userProfile = {
      themeDark: false
    }
  }
  hamburgerClick(event: Event) {
      this.sidebarActive = !this.sidebarActive;
      event.preventDefault();
  }
}