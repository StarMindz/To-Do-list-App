import Tasks from "./tasks";

const tasksObject = new Tasks();
export default tasksObject;

const dataStore = () => {
  localStorage.setItem("data", JSON.stringify(tasksObject.tasks));
};

export { dataStore };