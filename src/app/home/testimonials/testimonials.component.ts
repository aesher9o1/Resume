import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  testimonials = [
    {
      by: "Udit Bhardwaj",
      designation: "Senior Software Engineer at Novlence Core",
      comment: "It’s great that I came across a talented person like Aashis. Aashis is working with us as an intern. His front-end development skills have helped us to deliver effectively and efficiently. JavaScript, Angular, and CSS are his forte. He is always polite and calm while communicating. Although a self learner he is also teachable and ready to learn new things whenever required. Anybody would be lucky to have Aashis as a team member. As a front-end developer, Aashis earns my highest recommendation",
    },
    {
      by: "Vidhyanshu Jain",
      designation: "DSC Lead by Google Developers",
      comment: "Working with Aashis was a very good experience, Aashis is very dedicated and always excited to take up on new challenges. Aashis has shown exceptional growth in his technical as well as communicational skills. I would recommend Aashis for his dedication and love towards his work. Aashis will be a great addition to any team.",
    }
  ]

}
