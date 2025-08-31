import express from "express";
import {validateTodoCreate} from "../middleware/validatetodocrreate.js"
import {validateTodoUpdate} from "../middleware/validatetodoupdate.js"
import {
  getAllTodos, // tüm todo'ları al
    addTodo,    // yeni todo ekle
    getTodobyid,    // id'ye göre todo al
    deleteTodo,   // id'ye göre todo sil
    updatedTodo,  // id'ye göre todo güncelle
    patchTodo    // id'ye göre todo'nun belirli alanlarını güncelle
} from "../services/todosService.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/",validateTodoCreate, addTodo);
router.get("/:id", getTodobyid);
router.delete("/:id", deleteTodo);
router.put("/:id", validateTodoUpdate, updatedTodo);
router.patch("/:id", validateTodoUpdate, patchTodo);

export default router;