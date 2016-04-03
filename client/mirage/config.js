export default function() {
  this.namespace = "/api";

  this.get("/features");
  this.get("/features/:id");

  this.get("/tasks");
  this.get("/tasks/:id");
}
