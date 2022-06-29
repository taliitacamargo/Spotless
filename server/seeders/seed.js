const db = require('../config/connection');
const { Profile, Event } = require('../models');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Event.deleteMany({});
    console.log('seeded successfully');

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
);

