import "module-alias/register";
import { MongoHelper } from "@/external/repositories/mongodb/helpers/mongo-helper";

MongoHelper.connect(process.env.MONGO_URL)
    .then(async () => {
        const app = (await import("./config/app")).default;
        app.get("/", (req, res) => {
            res.json({ success: true, message: "API is on, lets goo!" });
        });
        app.listen(Number(process.env.PORT || 3000), "0.0.0.0", () => {
            console.log(`...Notes API Clean Architecture is running on http://localhost:${process.env.PORT || 3000}`);
        });
    })
    .catch(console.error);
