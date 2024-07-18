import { Component, OnInit } from '@angular/core';
import { WhoamI } from '../shared/entities';
import { whoami } from '../shared/whoami-mock';
import { NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  whoamiList: WhoamI[] = [];
  selectedWhoamI: WhoamI | null = null;

  ngOnInit() {
    this.whoamiList = whoami;
  }
  augmenterOpacite(image: HTMLElement) {
    image.classList.add('clicked');
}

toggleDescription(index: number) {
  if (this.whoamiList[index] === this.selectedWhoamI) {
    this.whoamiList[index].isActive = false;
    this.selectedWhoamI = null;
  } else {
    this.whoamiList.forEach((item, i) => {
      item.isActive = (i === index);
    });
    this.selectedWhoamI = this.whoamiList[index];
  }
}
}