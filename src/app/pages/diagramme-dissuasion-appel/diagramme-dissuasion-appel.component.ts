import {Component} from '@angular/core';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'diagramme-dissuasion-appel',
  templateUrl: './diagramme-dissuasion-appel.component.html'
})
export class DiagrammeDissuasionAppelComponent {
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Constructeurs ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private Post: PostService) {}

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  getDonnees = () => this.Post.postDissuasionAppel();
}