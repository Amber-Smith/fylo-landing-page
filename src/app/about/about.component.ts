import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 350) {
          $(".about").addClass("change");
        } else {
          $(".about").removeClass("change");
        }
      });
    });
  }
}
