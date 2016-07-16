'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  PictureGetById: getById
};


/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getById(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var id = req.swagger.params.id.value || 'this should never happen';

	var pictures = {
		1: { "id": "1", "path": "http://somewhere/path/1.jpg" },
		2: { "id": "2", "path": "http://somewhere/path/2.jpg" },
		3: { "id": "3", "path": "http://somewhere/path/3.jpg" }
	}

	var response = [];

	if( pictures[id] != null ){
		var response = [ pictures[ id ] ];
	}

	if( response.length > 0 ) {
		/*
		 *	if success: response must be an array of {"id":"xyz","path":"http://asdasdasd"}
		 *	see: https://github.com/beautiful-geo-diary/swagger-api/blob/master/api/swagger/swagger.yaml#L127
		 *	see: https://github.com/beautiful-geo-diary/swagger-api/blob/master/api/swagger/swagger.yaml#L246
		 */
		res.status(200).json(response);
	} else {
		/*
		 *	if fail: response must be an Error
		 *	see: https://github.com/beautiful-geo-diary/swagger-api/blob/master/api/swagger/swagger.yaml#L257
		 */
		res.status(404).json({"message":"picture not found"});
	}
}
