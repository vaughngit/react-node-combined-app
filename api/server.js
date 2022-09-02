const express = require('express');
const path = require('path');
const app = express(),
bodyParser = require("body-parser");
const faker = require('faker');
const _ = require('lodash');


port = 80;

// place holder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/health', (req, res) => {
  console.log('this app is healthy!')
  res.send({ status: 'Healthy' }).status(200);
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});



app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.get('/address', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const address = faker.address;
      return {
        country: address.country(),
        city: address.city(),
        state: address.state(),
        zipCode: address.zipCode(),
        latitude: address.latitude(),
        longitude: address.longitude()
      };
    })
  );
});

app.get('/products', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const commerce = faker.commerce;
      return {
        product: commerce.product(),
        price: commerce.price(),
        color: commerce.color()
      };
    })
  );
});

app.get('/images', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const image = faker.image;
      return {
        image: image.image(),
        avatar: image.avatar()
      };
    })
  );
});

app.get('/random', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const random = faker.random;
      return {
        word: random.word(),
        words: random.words()
      };
    })
  );
});

app.get('/users', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const user = faker.name;
      return {
        firstName: user.firstName(),
        lastName: user.lastName(),
        jobTitle: user.jobTitle()
      };
    })
  );
});

app.get('/lorem', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const lorem = faker.lorem;
      return {
        paragraph: lorem.paragraph(),
        sentence: lorem.sentence(),
        paragraphs: lorem.paragraphs()
      };
    })
  );
});

app.get('/userCard', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const helpers = faker.helpers;
      return {
        userCard: helpers.userCard()
      };
    })
  );
});

app.get('/createCard', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res.status(400).send({
      errorMsg: 'count query parameter is missing.'
    });
  }

  res.send(
    _.times(count, () => {
      const helpers = faker.helpers;
      return {
        createCard: helpers.createCard()
      };
    })
  );
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});