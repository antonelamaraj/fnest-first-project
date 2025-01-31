import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.model';
import{ v4 as uuid} from 'uuid'; 

@Injectable()
export class TasksService {
  private tasks:Task[]=[];

  //merr te gjithe tasks
  getAllTasks():Task[]{
    return this.tasks;
  }


  //create a task
  createTask(title: string, description: string): Task {
      const newTask: Task = {
        id: uuid(),
        title,
        description,
        status:TaskStatus.OPEN
      };
      this.tasks.push(newTask);
      return newTask;
  }

}
