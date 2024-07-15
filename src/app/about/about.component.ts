import { Component, OnInit } from '@angular/core';
import { WhoamI } from '../entities';
import { whoami } from '../whoami-mock';
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
    this.whoamiList.forEach((item, i) => {
      item.isActive = (i === index && !item.isActive); // Toggle isActive for the clicked item
    });

    // Set selectedWhoamI to show description
    this.selectedWhoamI = this.whoamiList[index];
  }
}