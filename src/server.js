const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./src/dbGet.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/consulta/full", (req, res) => {
  console.log(req.query)
  res.jsonp({
    "customer": {
      "identityDocument": {
        "type": "DNI",
        "number": "23232323"
      },
      "birthDate": "1980-02-14",
      "firstName": "LUIS",
      "middleName": "POLASTRI",
      "lastName": "LUJAN",
      "motherLastName": "LUJAN",
      "fullName": "LUJAN LUJAN LUIS POLASTRI",
      "shortName": "LUJAN,LUIS",
      "gender": "MASCULINO",
      "maritalStatus": "SOLTERO",
      "birthCountry": "PERU",
      "residenceCountry": "PERU",
      "nationalityCountry": "PERU",
      "educationLevel": "DOCTORADO",
      "houseType": "SIN_DATA",
      "address": [
        {
          "useCode": "PRINCI",
          "sequenceId": "000",
          "department": "LIMA",
          "province": "LIMA",
          "district": "LIMA",
          "streetType": "AVENIDA",
          "streetName": "CACHAPOYAS",
          "streetNumber": "130",
          "block": "",
          "lot": "",
          "apartment": "",
          "neighborhood": "",
          "landmark": "",
          "postalCode": "L01",
          "country": "PERU",
          "ubigeo": "150101",
          "type": "SIN_TIPO",
          "useType": "LEGAL",
          "date": "20151029",
          "status": "A",
          "flagStandard": true
        }
      ],
      "phone": [
        {
          "id": "C001993576812",
          "type": "CELULAR",
          "department": "CALLAO",
          "number": "993576812",
          "extension": ""
        },
        {
          "id": "C001955555555",
          "type": "CELULAR",
          "department": "CALLAO",
          "number": "955555555",
          "extension": ""
        }
      ],
      "email": [
        {
          "id": "002EMAPER",
          "type": "PERSONAL",
          "value": "KOU1501@GMAIL.COM"
        }
      ],
      "spouse": {
        "identityDocument": {
          "type": "SIN_DATA",
          "number": ""
        },
        "names": "",
        "surNames": ""
      },
      "company": {
        "name": "SIN_DATA",
        "address": "SIN_DATA",
        "phoneNumber": "",
        "extension": "",
        "positionDescripcion": "",
        "occupation": "SIN_DATA",
        "independent": false,
        "ubigeo": "",
        "employeeIndicator": "SIN_DATA"
      },
      "segment": "Sin Asignar",
      "situation": "ACTIVO",
      "serviceLevel": "PLATA",
      "personType": "CLIENTE",
      "customerPEP": false,
      "id": "00000050000017"
    }
  });
});

server.use(jsonServer.bodyParser);
server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running, PORT: 4000");
});
