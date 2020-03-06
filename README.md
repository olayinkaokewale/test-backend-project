# Backend for Test Frontend Project
This is the Node JS backend service for the test frontend project.

## Installation Instructions
To install the backend, Node and NPM is required.
1. Clone this repository using: `git clone https://github.com/olayinkaokewale/test-backend-project.git`
2. Run `cd test-backend-project` to change directory into the just clonned project.
3. Run `npm install` to get the neccessary packages
4. Run `npm run start` to startup the server.

## Get All Countries
This endpoint lists all the countries available on restcountries.eu API.
### Request (GET)
URL: `http://localhost:5000/countries`

### Sample Response
```json
{"status":200,"data":[ ... {"name":"Afghanistan","topLevelDomain":[".af"],"alpha2Code":"AF","alpha3Code":"AFG","callingCodes":["93"],"capital":"Kabul","altSpellings":["AF","Afġānistān"],"region":"Asia","subregion":"Southern Asia","population":27657145,"latlng":[33,65],"demonym":"Afghan","area":652230,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages": ... } ... ]}
```

## Get a Unique Country by Name
This endpoint returns the details of a country based on the `name` provided from the request.

### Request (GET)
URL http://localhost:5000/countries/name/{name_of_country}

### Sample Response:
Success:
```json
{"status":200,"data":{"name":"Uganda","topLevelDomain":[".ug"],"alpha2Code":"UG","alpha3Code":"UGA","callingCodes":["256"],"capital":"Kampala","altSpellings":["UG","Republic of Uganda","Jamhuri ya Uganda"],"region":"Africa","subregion":"Eastern Africa","population":33860700,"latlng":[1,32],"demonym":"Ugandan","area":241550,"gini":44.3,"timezones":["UTC+03:00"],"borders":["COD","KEN","RWA","SSD","TZA"],"nativeName":"Uganda","numericCode":"800","currencies": ... }}
```

Error:
```json
{"status":404,"message":"Not Found"}
```


## Get Countries Whose Name Matches Query String
This endpoint returns the list of countries that matches the `query` sent from the request.

### Request (GET)
URL: http://localhost:5000/countries/search/{query}

### Sample Response
Success:
```json
{"status":200,"data":[{"name":"United States Minor Outlying Islands","topLevelDomain":[".us"],"alpha2Code":"UM","alpha3Code":"UMI","callingCodes":[""],"capital":"","altSpellings":["UM"],"region":"Americas","subregion":"Northern America","population":300,"latlng":[],"demonym":"American","area":null,"gini":null,"timezones":["UTC-11:00","UTC-10:00","UTC+12:00"],"borders":...},{"name":"Tanzania, United Republic of","topLevelDomain":[".tz"],"alpha2Code":"TZ","alpha3Code":"TZA","callingCodes":["255"],"capital":"Dodoma","altSpellings":["TZ","United Republic of Tanzania","Jamhuri ya Muungano wa Tanzania"],"region":"Africa","subregion":"Eastern Africa","population":55155000,"latlng":[-6,35],"demonym":"Tanzanian",...}, ... ]}
```

Error:
```json
{"status":404,"message":"Not Found"}
```