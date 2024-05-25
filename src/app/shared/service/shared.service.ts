import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  categoryType=[
    {
      name:"Restraunt",
      id:1
    },
    {
      name:"Hotel",
      id:2
    },
    {
      name:"Gym",
      id:3
    },
    {
      name:"Events",
      id:4
    },
    {
      name:"Jobs",
      id:5
    }

  ]
}
