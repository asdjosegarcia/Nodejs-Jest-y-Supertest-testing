import app from '../src/app'//archive to test
import request from 'supertest'//supertest moduele, we named it as "request" btween supertest recomended this

describe('GET /tasks', () => {//we check if there is a GET /tasks path
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get(`/tasks`).send()
        expect(response.statusCode).toBe(200) //toBe is te same to ===, in other words... response code is equal to 200
    });

    test('should respond whit an array', async () => {
        const response = (await request(app).get('/tasks')); //a GET request to /task route
        expect(response.body).toBeInstanceOf(Array) //te body espected an array
    })

})

describe('POST /tasks', () => {
    //this should respond with a status code 200
    test('should respond with a 200 status ', async () => {
        const response = await request(app).post('/tasks').send();
        expect(response.statusCode).toBe(200)
    })

    //this should respond with a content-type of aplication/json
    test('should have a content-type: application/json in the header', async () => {
        const response = await request(app).post("/tasks");
        expect(response.header["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    })

    //should respondo with a json object containing the new task with an id

})

