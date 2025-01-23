# MyBank Project

## Description

MyBank is a full-stack web application designed to manage bank operations. The project consists of a **back-end** API built with **Symfony** and **API Platform** for managing operations and a **front-end** built with **React** for displaying and interacting with the operations. The application is fully containerized using **Docker** to ensure consistency across environments.

### Back-end

- **Symfony** framework
- **API Platform** for building REST APIs
- **MySQL** as the database (with Doctrine ORM)
- **Docker** for containerization

### Front-end

- **React** for building the user interface
- **Axios** for making API requests to the back-end
- **Docker** for containerization

## Features

### Back-end
- **Create, retrieve, update, delete operations**:
  - Operations consist of a title, amount, category (Fun, Daily Expenses, Transport), and date.
- **API** exposed via API Platform to interact with operations.
- **MySQL** as the database to store the operations.
  
### Front-end
- Display a list of operations.
- Add new operations via a form.
- Real-time interaction with the back-end API to fetch and post operations.

## Tech Stack

- **Symfony** (PHP framework)
- **API Platform** (REST API framework)
- **React** (JavaScript library for UI)
- **MySQL** (Database)
- **Docker** (Containerization)

## Prerequisites

- Docker
- Docker Compose

## Installation

### Back-end Setup (Symfony)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/medamine2003/MyBank
   cd my-bank
