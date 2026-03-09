import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.get("/api/health", (req, res) => {
    res.json({ message: "ok"});
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})