To run locally create a secrets.js file at the root level
create an obj with an aws key that points to an object
create key and secrets props on that obj in such a way that
is consistent with the commented out line in uploads.js.
Uncomment the lines in uploads.js and plug the values into AWS.config on line 9