import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  list_test;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getGames();
  }

  async getGames() {
    (await this.testService.getTests()).subscribe(data => {
      if (data) {
        this.list_test = data;
      }
    });
  }

}
