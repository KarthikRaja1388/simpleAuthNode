# User Management Backend System using Express.js and MongoDB

This is a README document for setting up a User Management Backend System using Express.js and MongoDB. The system will allow users to create and login to their accounts.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [API Endpoints](#api-endpoints)


## Introduction

This backend system is built using Node.js and Express.js framework, and it uses MongoDB as the database for storing user information. It provides endpoints for user registration and login, making it easy to integrate into any frontend application that requires user management functionalities.

## Prerequisites

Before proceeding with the installation, ensure you have the following prerequisites:

1. Node.js and npm (Node Package Manager) installed on your system.
2. MongoDB installed and running locally or accessible via a remote connection.

## API Endpoints

The backend system provides the following API endpoints:

- `POST /api/users/register`: Register a new user account. The request body should contain `name`, `email`, and `password`.
- `POST /api/users/login`: Login an existing user. The request body should contain `email` and `password`.

