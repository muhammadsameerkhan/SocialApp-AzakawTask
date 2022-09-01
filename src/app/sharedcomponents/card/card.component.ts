import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { post } from 'src/app/Models/post';
import { user } from 'src/app/Models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() post !: post;

  @Input() type: string = "";

  @Input() user !: user

  constructor() { }

  ngOnInit(): void {
  }

}
