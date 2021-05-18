
function getContentType(filename) {
  // Returns the correct content-type string e.g. 'text/html'
  // for the given filename string, e.g. 'index.html'
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  
  // extension variable will contain the file type extension 
  // e.g. html, css, jpeg, jpg, or unknown/otherwise
  if (extension === 'html') {
    return 'text/html';
  } else if (extension === 'css') {
    return 'text/css';
  } else if (extension === 'jpg' || extension === 'jpeg') {
    return 'image/jpeg';
  }

  return 'text/plain';

}