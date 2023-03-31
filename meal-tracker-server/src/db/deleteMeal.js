import { ObjectId } from "mongodb";
import { db } from ".";

export const deleteMeal = async (mealId) => {
  const connection = db.getConnection();
  await connection.collection("meals").deleteOne({ _id: ObjectId(mealId) });
};
