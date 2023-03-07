import { Component } from '@angular/core';
import { Todo } from 'src/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  tasks:Todo[] = [
  {task:"Clean the house", completed: false},{task:"Work on homework", completed: false},
  {task:"Make dinner", completed: true},{task:"Go shopping", completed: false}, 
  {task:"Go for a walk", completed: true},
];

newTask: Todo = {
  task: "",
  completed: false
};

addTask(): void{
  let result: Todo = {
    task: this.newTask.task,
    completed: this.newTask.completed
  };
  this.tasks.push(result);
}
completeTask(index: number): void{
  this.tasks[index].completed = true;
  }

isCompletedList(): boolean{
  if(this.tasks.length == 0){
    return true;
  }
  let result:boolean = true;

  this.tasks.forEach((t: Todo) => {
    if(t.completed == false){
      result = false;
    }
  });
  return result;
}

  filter: string = "";

  getFiltered(): Todo[]{
    return this.tasks.filter((t: Todo) => t.task.includes(this.filter));
  }


  getCorrectIndex(index: number): number{
    let task: Todo = this.getFiltered()[index];

    return this.tasks.findIndex((t: Todo) => t.task == task.task && t.completed == task.completed);
  }


  RemoveTask(index: number): void{
    this.tasks.splice(this.getCorrectIndex(index), 1);
  }
}