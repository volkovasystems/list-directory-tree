/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "list-directory-tree",
			"fileName": "list-directory-tree.js",
			"moduleName": "listDirectoryTree",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/list-directory-tree.git",
			"testCase": "list-directory-tree-test.js",
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"recursively-traverse-directory:@github.com/volkovasystems": "recursivelyTraverseDirectory",
			"harvest-list:@github.com/volkovasystems": "harvestList",
			"check-directory-exists@github.com/volkovasystems": "checkDirectoryExists"
		}
	@end-include
*/

var listDirectoryTree = function listDirectoryTree( domainDirectory ){
	/*:
		@meta-configuration:
			{
				"domainDirectory:required": "Directory|string"
			}
		@end-meta-configuration
	*/

	return harvestList( recursivelyTraverseDirectory( domainDirectory ),
		function harvester( filePath ){
			if( checkDirectoryExists( filePath ) ){
				return filePath;
			}
		} );
};

var checkDirectoryExists = require( "./check-directory-exists/check-directory-exists.js" );
var recursivelyTraverseDirectory = require( "./recursively-traverse-directory/recursively-traverse-directory.js" );
var harvestList = require( "./harvest-list/harvest-list.js" );

module.exports = listDirectoryTree;
