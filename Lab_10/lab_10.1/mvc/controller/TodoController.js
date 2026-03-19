import { TodoModel } from "../model/TodoModel.js";
import { TodoView } from "../view/TodoView.js";

export class TodoController {
	constructor(containerId) {
		this.model = new TodoModel();
		this.view = new TodoView(containerId);

		this.view.onAddTodo = (text) => this.model.addTodo(text);
		this.view.onToggleTodo = (id) => this.model.toggleTodo(id);
		this.view.onDeleteTodo = (id) => this.model.deleteTodo(id);
		this.view.onEditTodo = (id, text) => this.model.updateTodo(id, text);

		this.model.subscribe(this.view);

		this.view.render(this.model.getTodos());
	}
}