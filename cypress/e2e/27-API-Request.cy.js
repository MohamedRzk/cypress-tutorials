// "url" : https://65eccb3d0ddee626c9b0f088.mockapi.io/api/v1/employees

it("check date return from get request", () => {
    cy.request({
        method : "get" ,
        url : "https://65eccb3d0ddee626c9b0f088.mockapi.io/api/v1/employees"
    })
    .then((response) => {
        expect(response.status).to.eql(200);
    })
})

it("check date stored in post request", () => {
    cy.request({
        method : "post" ,
        url : "https://65eccb3d0ddee626c9b0f088.mockapi.io/api/v1/employees",
        body : {
            "name": "Ahmed Kafez mansour",
            "countery": "UK",
            "mobile": "01234567894",
        }
    })
    .then((response) => {
        expect(response.status).to.eql(201);
    })
})


//expect(response.body.firstname).to.eql('mohamed');

/*
 if we need to add auth in header return from other request
at first create vriable as => let token;
then , in first request at response
token = response.body.token;
finally , in the last request use it in the header
.header : 'bearer' $(token)
or
.auth { bearer : token }
*/

