This is a simple application that creates a RESTful Express API. It will give users the ability to CREATE, READ, UPDATE, and DELETE items from a To Do list.
- In order to view all of the To Do items in this application, make an HTTP GET request to /api/items. Your sample response body will look something like the following:
```
[
    {
        "id": 1,
        "item": "get some eggs",
        "completed": true
    },
    {
        "id": 2,
        "item": "get some beer",
        "completed": false
    },
]
```
- To create a new To Do item in this application, make an HTTP POST request to /api/items. The body of your POST request should look like this:
```
{
    "id": 3,
    "item": "the name of the thing we're including",
    "completed": false
}
```
- Once posted, a new item will return the following in the body of the response:
```
{
	"id": 3,
	"item": "the name of the thing we're launching",
	"completed": false
}
```
- In order to edit the contents of a single To Do item, make a PUT request to /api/items/:id. A sample of the request should look like the following:
```
{
	"id": 2,
	"item": "get some beer",
	"completed": true
}
```
- In order to delete a single item from our To Do items API, make a DELETE request to /api/items/:id. The item that will be deleted will be returned.