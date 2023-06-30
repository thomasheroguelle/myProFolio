import { Component } from '@angular/core';
import { IImgSvg, IMGSVG } from 'src/mock/mock';

@Component({
  selector: 'app-stacks-used',
  templateUrl: './stacks-used.component.html',
  styleUrls: ['./stacks-used.component.css']
})
export class StacksUsedComponent {
  imgSvg : IImgSvg[] = IMGSVG;

}
