# Book API Spec

## Create book
#### Endpoint
`POST` /api/books

#### Headers
- Auth: `token`

#### Request Body
```json
{    
    "title": "book title",
    "author": "Book author",
    "publisher": "Book publisher",
    "stock": 10,
    "status": "Available",
}
```

#### Response Body Success `200`
```json
{    
    "data": {
        "id": 1, 
        "title": "book title",
        "author": "Book author",
        "publisher": "Book publisher",
        "stock": 10,
        "status": "Available",
    }
}
```

#### Response Body Error 
| status        | errors           | 
| ------------- |:-----------------:|
| `400`         | Title is required |
| `401 `        | Unauthorized      |
 

## Get books
#### Endpoint
`GET` /api/books

#### Headers
- Auth: `No auth`


#### Response Body Success `200`
```json
{    
    "data": {
        "id": 1, 
        "title": "book title",
        "author": "Book author",
        "publisher": "Book publisher",
        "stock": 10,
        "status": "Available",
    }
}
```

## Update book
#### Endpoint
`PATCH` /api/books/:bookId

#### Headers
- Auth: `token`

#### Request Body
```json
{    
    "title": "Updated title",
    "author": "Updated author",
    "publisher": "Updated publisher",
    "stock": 10,
    "status": "Available",
}
```

#### Response Body Success `200`
```json
{    
    "data": {
        "id": 1, 
        "title": "Updated title",
        "author": "Updated author",
        "publisher": "Updated publisher",
        "stock": 10,
        "status": "Available",
    }
}
```

#### Response Body Error 
| status        | errors            | 
| ------------- |:-----------------:|
| `400`         | Title is required |
| `401 `        | Unauthorized      |
| `404 `        | Book is not found |

## Delete book
#### Endpoint
`DELETE` /api/books/:bookId

#### Headers
- Auth: `token`

#### Response Body Success `200`
```json
{    
    "data": "OK"
}
```

#### Response Body Error 
| status        | errors            | 
| ------------- |:-----------------|
| `401 `        | Unauthorized      |
| `404 `        | Book is not found |
 

