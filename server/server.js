const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://koushikmaity9563:6Amz0AKdBXyqhwnn@cluster0.l73tib7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
