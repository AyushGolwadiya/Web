# User Authentication API Documentation

## Register User
Registers a new user in the system and returns an authentication token.

### Endpoint

```
POST /users/register
```

### Request Body

The request body should be a JSON object with the following structure:

```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Validation Rules

- `email`: Must be a valid email address
- `fullname.firstname`: Must be at least 3 characters long
- `password`: Must be at least 6 characters long

### Response

#### Success Response (201 Created)

```json
{
    "token": "string (JWT token)",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error Response (400 Bad Request)

```json
{
    "errors": [
        {
            "msg": "string (error message)",
            "param": "string (field name)",
            "location": "body"
        }
    ]
}
```

## Login User
Authenticates a user and returns an authentication token.

### Endpoint

```
POST /users/login
```

### Request Body

The request body should be a JSON object with the following structure:

```json
{
    "email": "string",
    "password": "string"
}
```

### Validation Rules

- `email`: Must be a valid email address
- `password`: Must be at least 6 characters long

### Response

#### Success Response (200 OK)

```json
{
    "token": "string (JWT token)",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error Response (401 Unauthorized)

```json
{
    "message": "Invalid email or password"
}
```

### Status Codes

- `201`: User successfully registered
- `200`: User successfully logged in
- `400`: Invalid input data (validation errors)
- `401`: Invalid credentials
- `500`: Internal server error

### Notes

- The password is automatically hashed before storage
- The returned JWT token should be used for subsequent authenticated requests
- The user's password is not included in the response for security reasons
- For login, the email must exist in the system and the password must match 