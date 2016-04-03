export default function() {

  console.debug('mirage server', this);
  
  this.pretender.handledRequest = function(verb, path, request) {
    console.info("Pretender handled", verb, path, request);
  };

  this.pretender.unhandledRequest = function(verb, path, request) {
    console.info("Pretender did not handle", verb, path, request);
  };
  
  
  

  this.namespace = "/api";

  this.get("/features");
  this.get("/features/:id");

  this.get("/tasks");
  this.get("/tasks/:id");
}
