const express = require('express');
const routes = express.Router()

const projects = [];

// Middleware LOCAL
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  if(!project) return res.status(400).json({ error: `Project with ID: ${id} not found` });
  return next();
}

// List all projects and tasks
routes.get('/projects', (req, res) => {
  return res.json(projects);
});

// Create new project with id and Title in body
routes.post('/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  return res.json(projects);
});

// Create new task in an existing project
routes.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const project = projects.find(p => p.id == id);
  project.task.push(task);
  return res.json(projects);
});

// Edit only project title by id
routes.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects[id].title = title;
  return res.json(projects);
});

// Delete project by id
routes.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  projects.splice(id, 1);
  return res.send(200);
});

module.exports = routes;