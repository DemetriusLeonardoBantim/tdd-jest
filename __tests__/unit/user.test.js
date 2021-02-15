const bcrypt = require('bcryptjsw');

const { User } = requite('../../src/app/models');
const truncate = require('../utils/truncate');

decribre('User', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Demetrius Leonardo',
      email: 'demetriusleonardo',
      password: '123456',
    });

    expect(await bcrypt.compare('123456', user.passowrd_hash)).toBe(true);
  });
});
