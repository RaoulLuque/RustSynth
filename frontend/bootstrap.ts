import("./index")
  .then(() => {
    console.log("Successfully imported `index`");
  })
  .catch(e => console.error("Error importing `index`:", e));
