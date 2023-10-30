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
const express_1 = __importDefault(require("express"));
const todos_controller_1 = __importDefault(require("../controllers/todos.controller"));
const router = express_1.default.Router();
const todoController = new todos_controller_1.default();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoController.getAllTodos();
        res.json(todos);
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newTodo = yield todoController.createTodo({ title });
        res.status(201).json(newTodo);
    }
    catch (err) {
        next(err);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = yield todoController.updateTodo(id, {
            title,
            completed,
        });
        res.json(todo);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield todoController.deleteTodo(id);
        res.json(deleted);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
