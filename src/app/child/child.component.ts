import { Component, Input ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // @Input({
  //   required: true,
  //   alias: 'dfp',
  //   transform:(value: string) => value.toUpperCase()
  // }) getDataFromParent: string = '';
  @Output() emitData:EventEmitter<string> = new EventEmitter();
  setdata(){
    this.emitData.emit("data from child")
  }
}
