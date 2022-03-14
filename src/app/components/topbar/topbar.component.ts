import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { LayoutBaseComponent } from 'src/app/pages/layout-base/layout-base.component';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  profileMenuVisible:boolean=false;
  searchVisible:boolean=false;
  // darkTheme:boolean=false;
  profile:Profile;

  constructor(
    public base: LayoutBaseComponent,
  ) {
    console.log(UiService.userProfile); 
    this.profile = UiService.userProfile;
  }

  ngOnInit(): void {
  }
  toggleProfileMenu(e:any){
    e.preventDefault();
    e.stopPropagation();
    this.profileMenuVisible = !this.profileMenuVisible;
  }
  toggleSearch(e:any){
    e.preventDefault();
    e.stopPropagation();
    this.searchVisible = !this.searchVisible;
  }
  searchInputClicked(e:any){
    e.preventDefault()
    e.stopPropagation();
  }
  changeTheme(e:any){
    UiService.userProfile["darkTheme"] = e.checked;
    const name = e.checked ? 'dark' : 'light';
    document.body.className = document.body.className.replace("dark","").replace("light","");
    document.body.className += ` ${name}`;
  }
}
