import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  profile:Profile;

  constructor(
  ) {
    this.profile = UiService.userProfile;
  }

  ngOnInit(): void {
  }

}
