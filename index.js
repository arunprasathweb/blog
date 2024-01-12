import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let title =[];
let content =[];


app.get('/', (req, res) => {
    res.render('home.ejs', { title });
});


app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const Ntitle = title[id];
    const Ncontent = content[id];

    res.render("post.ejs", { Ntitle, Ncontent});
  });

  app.post("/create-post", (req, res) => {
    title.push(req.body.title);
    content.push(req.body.content);
    res.redirect("/");
});  




  




app.listen(port, () => {
    console.log('App is up and runing');
});
