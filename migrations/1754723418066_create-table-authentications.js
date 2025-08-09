export const shorthands = undefined;

export const up = (pgm) => {
  pgm.createTable('authentications', {
    username: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

export const down = (pgm) => {
  pgm.dropTable('authentications');
};
