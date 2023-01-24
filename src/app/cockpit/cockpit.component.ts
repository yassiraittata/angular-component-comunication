import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(
    servernameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    // this is the data wich will be caught by the $event parameter we pass to the function
    this.serverCreated.emit({
      name: servernameInput.value,
      content: serverContentInput.value,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
