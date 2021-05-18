
function getContentType(filename) {
  // Returns the correct content-type string for the given filename string, e.g. "index.html"
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  // extension variable will contain the file type extension 
  // e.g. html, css, jpeg, jpg, or unknown/otherwise
  switch (extension) {
    case 'html':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'jpeg':
      return 'image/jpeg';
    case 'jpg':
      return 'image/jpeg';
    default: 
      return 'text/plain';
  }

}