"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, () => {
    console.log("serveidor rodando na porta 3000");
});
//# sourceMappingURL=app.js.map