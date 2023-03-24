// external imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// internal imports
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorMiddleware');
const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 5000;

// initialize express
const app = express();

// custom middleware to log events
app.use(logger);

// cross origin resource sharing (cors)
app.use(cors());

// third party json parser
app.use(bodyParser.json());

// built-in middleware for json
// app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// Set up routes
app.use('/api/', require('./routes/'));

// custom error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
