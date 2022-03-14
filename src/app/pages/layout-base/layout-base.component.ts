import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart   } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss']
})
export class LayoutBaseComponent implements OnInit{

  title:string = 'sensei-ng';
  sidebarActive:boolean = true;
  hideOverflow:boolean = false;
  showCssAnim:boolean = true;

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
  }
  ngOnInit(): void {
  }
  hamburgerClick(event: Event) {
      this.sidebarActive = !this.sidebarActive;
      event.preventDefault();
  }
}
