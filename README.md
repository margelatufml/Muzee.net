# Muzee.net — Museum Web Application

A full-stack museum web application with a **React** frontend and **Django** backend.

## Tech Stack

- **Frontend:** React, JavaScript, Webpack, Babel
- **Backend:** Django (Python), Pipenv
- **Bundling:** Webpack with custom configuration

## Project Structure

```
├── leadmanager/         # Django backend application
├── package.json         # Frontend dependencies
├── webpack.config.js    # Webpack bundling configuration
├── .babelrc            # Babel transpilation config
├── Pipfile             # Python dependencies
└── Pipfile.lock
```

## Getting Started

```bash
# Backend
pipenv install
pipenv run python manage.py runserver

# Frontend
npm install
npm run dev
```

## Features

- Django REST API backend
- React single-page application frontend
- Webpack build pipeline with Babel
- Museum content management

