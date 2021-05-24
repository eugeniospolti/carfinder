## Getting Started

First, run the docker compose to start up the applications:

```bash
docker-compose up --build
```

Frontend:
Open [http://localhost:3000](http://localhost:3000) .

The backend was created in Next.JS using the following packages:

- Chackra-Ui (Design system and components)
- Axios (Rest API)
- React-hook-forms ( Form )
- Yup ( Form validation )

OBS: The index pages has some random data just to help illustrate a better design.

Features:

- Car listing using cards.
- Car finder
  - Create, Update and Read cars
  - Search By maker and model
  - Column sort
  - Filter by avalilable and all
  - Pagination

Backend:

The backend was created in NodeJS using the following packages:

- Express (Http server)
- Mongoose (Connect to MongoDb)
- Express-validator ( Validate the body os requests )
- swagger-ui-express ( Document the endpoints )

Open [http://localhost:4005/swagger](http://localhost:4005/swagger) .
