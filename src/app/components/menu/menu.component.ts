import { Component, OnInit } from '@angular/core';
import { LayoutBaseComponent } from 'src/app/pages/layout-base/layout-base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items:any[];
  constructor(
    public base: LayoutBaseComponent
  ) { }

  ngOnInit(): void {
    this.populateMenu();
  }

  populateMenu(){
    this.items = [
      {
          label: 'Dashboard', icon: 'pi pi-home',
          items: [
              {label: 'Sales', icon: 'pi pi-desktop', routerLink: ['/sales']},
          ]
      },
      {
        label: 'Apps', icon: 'pi pi-home',
        items: [
            {label: 'Todo', icon: 'pi pi-check-circle', routerLink: ['/todo']},
        ]
      },
      {
          label: 'Pages', icon: 'pi pi-briefcase', routerLink: ['/pages'],
          items: [
              {label: 'Login', icon: 'pi pi-sign-in', routerLink: ['/login']},
              {label: 'Error', icon: 'pi pi-times-circle', routerLink: ['/error']},
           ]
      },
    
      {
          label: 'Help', icon: 'pi pi-download',
          items: [
              {
                  label: 'Documentation', icon: 'pi pi-info-circle', routerLink: ['/documentation']
              }
          ]
      }
    ];
  }
}
