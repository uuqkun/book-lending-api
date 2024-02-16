# User API Spec

## Register
#### Endpoint
`POST` /api/users/register

#### Headers
- Auth: `No auth`

#### Request Body
```json
{    
    "fullname": "user",
    "email": "user@gmail.com",
    "password": "secret",
    "phone": "085755803321",
}
```

#### Response Body Success `200`
```json
{    
    "data": {
        "id": "1",
        "fullname": "user",
        "email": "user@gmail.com",
        "phone": "085755803321",
    }
}
```

#### Response Body Error `400`
```json
{
    "errors": "All fields are required"
}
```

## Login
#### Endpoint
`POST` /api/users/login

#### Headers
- Auth: `No auth`

#### Request Body
```json
{    
    "fullname": "user",
    "email": "user@gmail.com"
}
```

#### Response Body Success `200`
```json
{    
    "data": {
        "id": "1",
        "fullname": "user",
        "email": "user@gmail.com",
        "phone": "085755803321",
        "role": "user",
        "token": "user",
    }
}
```

#### Response Body Error `400`
```json
{
    "errors": "fullname & email are required"
}
```

#### Response Body Error `404`
```json
{
    "errors": "Credential cannot be found"
}
```

## UPDATE
#### Endpoint
`PATCH` /api/users/:userId

#### Headers
- Auth: `token`

#### Request Body
```json
{    
    "fullname": "user",
    "email": "user@gmail.com",
    "phone": "085755803311"
}
```

#### Response Body Success `200`
```json
{    
    "data": {
        "id": "1",
        "fullname": "user",
        "email": "user@gmail.com",
        "phone": "085755803311",
        "role": "user",
        "token": "user",
    }
}
```

#### Response Body Error `400`
```json
{
    "errors": "fullname is required"
}
```

#### Response Body Error `401`
```json
{
    "errors": "Unauthorized user"
}
```

#### Response Body Error `404`
```json
{
    "errors": "Credential cannot be found"
}
```

## GET
#### Endpoint
`GET` /api/users/:userId

#### Headers
- Auth: `token`

#### Response Body Success `200`
```json
{    
    "data": {
        "id": "1",
        "fullname": "user",
        "email": "user@gmail.com",
        "phone": "085755803311",
        "role": "user",
        "token": "user",
    }
}
```

#### Response Body Error `401`
```json
{
    "errors": "Unauthorized user"
}
```

#### Response Body Error `404`
```json
{
    "errors": "Credential cannot be found"
}
```

## DELETE
#### Endpoint
`DELETE` /api/users/admin/:userId

#### Headers
- Auth: `token`

#### Request Body
```json
{    
    "id": 3
}
```

#### Response Body Success `200`
```json
{    
    "data": "OK"
}
```

#### Response Body Error `400`
```json
{
    "errors": "user`s id is required"
}
```

#### Response Body Error `401`
```json
{
    "errors": "Unauthorized admin"
}
```

#### Response Body Error `404`
```json
{
    "errors": "Credential cannot be found"
}
```


