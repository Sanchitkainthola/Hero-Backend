import express from "express";
import { createHero, getallHeroes,getHerobyID, getHerobytitle, updateHero, deleteHero } from "../Controllers/hero.Controller.js"; //.js important

const Router=express.Router();

Router.route("/").post(createHero);

Router.route("/").get(getallHeroes);

Router.route("/id/:id").get(getHerobyID);

Router.route("/title").get(getHerobytitle);

Router.route("/update/:id").put(updateHero);

Router.route("/delete/:id").delete(deleteHero);



export default Router;
