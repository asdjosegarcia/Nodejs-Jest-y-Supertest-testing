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
    describe('given a title and description',()=>{
        const newTask={
            title:"Somte title",
            description:"dome description"
        }

        test('should respond with a 200 status ', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200)
        })
    
        //this should respond with a content-type of aplication/json
        test('should have a content-type: application/json in the header', async () => {
            const response = await request(app).post("/tasks").send(newTask);
            expect(response.header["content-type"]).toEqual(
                expect.stringContaining("json") //we ask if the head has the json text
            )
        })
    
        //should respond with a json object containing the new task with an id
        test('should respond with an task ID',async()=>{
            const response=await request(app).post("/tasks").send(newTask)
            console.log(response.body);
            expect(response.body.id).toBeDefined();//if id is defined, as text, number, etc etc...
        })
    
    })

    describe('when title and description is missing',()=>{
        test('should respond with a 400 status code',async ()=>{
            const fields=[//send a multiples object to multiple tests in a only test
            {},
            {title:'Test Task'},
            {description:'Test Description'},
            ]

            for(const body of fields){
                const response=await request(app).post('/tasks').send(body)
                expect(response.statusCode).toBe(400)
            }
        })

    })


})

