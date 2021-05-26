# Build Week Food Truck

### POST - Create Account

<details>
<summary>https://plantszapi.herokuapp.com/api/auth/register</summary>

```JSON
what you need:
{
    "username": "Joe",
    "password": "1234",
    "phoneNumber":"775-123-1456"
}

what you get back:
{
    "data": {
        "user_id": 1,
        "username": "Joe",
        "password": "$2a$08$0oUfmvlujUay2NBGG8CWJOhqhpB8gZRk/UmVa9X8NEZhUKDVIxt5S",
       
    }
}
```
</details>

-----------------------------------------------------------------------------------------

### POST - Login
<details>
<summary>https://plantszapi.herokuapp.com/api/auth/login</summary>

```JSON
what you need:
role can be operator or diner
{
    "username": "luke",
    "password": "1234",
   
}

what you get back:
{
    "message": "luke is back!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6Imx1a2UiLCJpYXQiOjE2MTcyMjU3OTcsImV4cCI6MTYxNzMxMjE5N30.q8woGClRqHNN1tTHwd48FhHalKHdHW-z5dMSzHqbLL4",
    
}
```
</details>

-----------------------------------------------------------------------------------------

### DELETE - Logout User
<details>
<summary>https://plantszapi.herokuapp.com/api/auth/logout</summary>

```JSON
Status: 200 OK
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get Plant by id
<details>
<summary>https://plantszapi.herokuapp.com/api/plants/{plant_id}</summary>

```JSON
what you get back:
{
    "plant_id": 2,
  
}
    
    
```
</details>
### PUT - Edit Plant by id
<details>
<summary>https://plantszapi.herokuapp.com/api/plants/{plant_id}</summary>

```JSON
what you get back:
{
    "plant_id": 2,
  
}
    
    
```
</details>

-----------------------------------------------------------------------------------------

### POST - Create a new plant
<details>
<summary>https://plantszapi.herokuapp.com/api/plants/plants</summary>

```JSON
what you get back:
[
    {
        "truck_id": 1,
        "truck_img": "arturo-rey-m6fYkq_P2Cc-unsplash.jpg",
        "cuisine_type": "french",
        "departure_time": "19:00:00",
        "longitude": "44.88888",
        "latitude": "22.12121",
        "diner_favetruck_id": 3,
        "diner_id": 1
    }
]
```
</details>

-----------------------------------------------------------------------------------------

### GET - Get ALL plants
<details>
<summary>https://plantszapi.herokuapp.com/api/plants/plants</summary>

```JSON
what you get back:
[
    with plant data
     
]
```
</details>

-----------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------


</details>

-----------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------




-----------------------------------------------------------------------------------------




