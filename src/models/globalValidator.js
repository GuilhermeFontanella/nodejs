import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value !== "",
    message: ({ path }) => `There was not a valid value for the field ${path}.`
})