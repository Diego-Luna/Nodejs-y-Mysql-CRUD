const controller = {};

controller.list = ( req,res ) => {
  req.getConnection( (err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
      if(err){
        // next(err);
        res.json(err);
      }
      console.log(customers);
      res.render('customers', {
        data: customers
      });
    });
  });
};

// para guardar datos
controller.save = ( req, res ) => {
  const data = req.body;
  req.getConnection( (err, conn) => {
    conn.query('INSERT INTO customer set ?', [data], (err, rows) => {
      console.log(rows);
      res.redirect('/');
    });
  });
};

// para borrar
controller.delete = ( req, res ) => {
  const { id } = req.params;
  req.getConnection( (err, conn) => {
    conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      console.log(rows);
      res.redirect('/');
    });
  });
};

// para editar los datos
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customer_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
    });
  });
};

module.exports = controller;