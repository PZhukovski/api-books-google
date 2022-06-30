
import path from 'path'; 
import express from 'express';

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build' , 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running');
});