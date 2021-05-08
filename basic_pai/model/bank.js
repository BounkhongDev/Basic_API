var db = require("../controllers/dbconnect");

module.exports = {
  select: () => {
    return new Promise(async (res, req) => {
      let con;
      try {
        con = await db.getConnection();
        let bank = await con.query("select*from tbBank");
        res(bank);
      } catch (error) {
        con.end();
        req(error);
      } finally {
        if (con) con.end();
      }
    });
  },

  insert: (ac, bl) => {
    return new Promise(async (res, req) => {
      let con;
      try {
        con = await db.getConnection();
        let bank = await con.query("insert into tbBank values(?,?)", [ac, bl]);
        res(bank);
      } catch (error) {
        con.end();
        req(error);
      } finally {
        if (con) con.end();
      }
    });
  },

  update: (bl, ac) => {
    return new Promise(async (res, req) => {
      let con;
      try {
        con = await db.getConnection();
        let bank = await con.query(
          "update tbBank set balance = ? where account=?",
          [bl, ac]
        );
        res(bank);
      } catch (error) {
        con.end();
        req(error);
      } finally {
        if (con) con.end();
      }
    });
  },

  delete: (ac) => {
    return new Promise(async (res, req) => {
      let con;
      try {
        con = await db.getConnection();
        let bank = await con.query(
          "Delete from tbBank where account=?",
          [ac]
        );
        res(bank);
      } catch (error) {
        con.end();
        req(error);
      } finally {
        if (con) con.end();
      }
    });
  },
};
