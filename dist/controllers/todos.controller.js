"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_model_1 = __importDefault(require("../models/Todo.model"));
class TodoController {
    getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return Todo_model_1.default.find({});
        });
    }
    createTodo(todoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = new Todo_model_1.default(todoData);
            return newTodo.save();
        });
    }
    updateTodo(todoId, todoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, completed } = todoData;
            const todo = yield Todo_model_1.default.findById(todoId);
            todo.completed = completed;
            todo.title = title;
            yield todo.save();
            return todo;
        });
    }
    deleteTodo(todoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Todo_model_1.default.findByIdAndDelete(todoId);
            return result;
        });
    }
}
exports.default = TodoController;
