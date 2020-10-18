const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    id: 1,
    lat: "-25.0954808",
    lng: "-50.1664192",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "91988231",
    images: [
      "https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Hórario de visitas Das 18h até 8h",
    open_on_weekends: "0",
  })

  //consultar dados da tabela
  const selectOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectOrphanages);

  //consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"));
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"));
});
