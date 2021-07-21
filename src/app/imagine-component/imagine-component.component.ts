import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imagine-component",
  templateUrl: "./imagine-component.component.html",
  styleUrls: ["./imagine-component.component.scss"],
})
export class ImagineComponentComponent implements OnInit {
  constructor() {}

  title = ["Milky Way", "Cloud of Molecular gas", "Nebula"];
  description = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
  lobortis neque, at varius ex. Pellentesque molestie risus eu felis
  interdum porta. Etiam viverra placerat ullamcorper. Proin accumsan ex
  eget odio pretium, ac molestie arcu consectetur. Integer ornare elit sit
  amet ex rutrum pretium.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
  lobortis neque, at varius ex. Pellentesque molestie risus eu felis
  interdum porta. Etiam viverra placerat ullamcorper. Proin accumsan ex
  eget odio pretium, ac molestie arcu consectetur. Integer ornare elit sit
  amet ex rutrum pretium.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
  lobortis neque, at varius ex. Pellentesque molestie risus eu felis
  interdum porta. Etiam viverra placerat ullamcorper. Proin accumsan ex
  eget odio pretium, ac molestie arcu consectetur. Integer ornare elit sit
  amet ex rutrum pretium.`,
  ];

  imageNumber: any = 0;

  imageClassBase = [
    "section-imagine__image section-imagine__image--0",
    "section-imagine__image section-imagine__image--1",
    "section-imagine__image section-imagine__image--2",
  ];

  imageClass = [
    "section-imagine__image section-imagine__image--0 section-imagine__image--z-index",
    "section-imagine__image section-imagine__image--1",
    "section-imagine__image section-imagine__image--2",
  ];

  activeClass = " section-imagine__image--z-index";
  fadeOutClass = " section-imagine__image--fade-out";

  rightClick: Boolean = true;

  ngOnInit(): void {}

  clickRight() {
    this.rightClick = true;
    this.executeClick();
  }

  clickLeft() {
    this.rightClick = false;
    this.executeClick();
  }

  executeClick() {
    this.imageClass.splice(0, this.imageClass.length, ...this.imageClassBase);
    this.fadeOut();
    this.fadeIn();
  }

  fadeOut() {
    const str = this.imageClass[this.imageNumber].concat(this.fadeOutClass);
    this.imageClass.splice(this.imageNumber, 1, str);
  }

  fadeIn() {
    if (this.rightClick && this.imageNumber < this.imageClass.length - 1)
      this.imageNumber++;
    else if (this.rightClick && this.imageNumber >= this.imageClass.length - 1)
      this.imageNumber = 0;
    else if (this.imageNumber > 0) this.imageNumber--;
    else this.imageNumber = this.imageClass.length - 1;

    const str = this.imageClass[this.imageNumber].concat(this.activeClass);
    this.imageClass.splice(this.imageNumber, 1, str);
  }
}
