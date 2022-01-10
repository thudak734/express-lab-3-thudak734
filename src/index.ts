import express from 'express';
import path from 'path';

import assignmentsRoutes from './routes/assignments-routes'

const app = express();

// Setting up API
app.use(express.json());

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", assignmentsRoutes);

// Keep this line. It is added for our testing purposes.
export default app;