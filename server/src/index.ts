import { MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
   const orm = await MikroORM.init({
       entities:[Post],
       dbName:"lireddit",
       type:"postgresql",
       debug: !__prod__,
       user:"postgres",
       password:"Sql6533!"
   });

   const post = orm.em.create(Post , {title:"my first post"});

   await orm.em.persistAndFlush(post);
   await orm.em.nativeInsert(Post , {title :'my first post 2'});
};

main().catch(err => {
    console.log(err)
});

