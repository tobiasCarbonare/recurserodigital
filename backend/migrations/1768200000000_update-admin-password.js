/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    UPDATE users
    SET password_hash = '$2b$10$FuvlSvTFdcVGK.ht6gGIIeNqhH.k0WD25mseZbFB/iUEK.pZ7FfWa'
    WHERE username = 'admin';
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    UPDATE users
    SET password_hash = '$2b$10$Ly5kLmBrzpV/2/W1zgwGQOc65t.RPiKPtMZD16Z6zCuhN7JBgZDJC'
    WHERE username = 'admin';
  `);
};
