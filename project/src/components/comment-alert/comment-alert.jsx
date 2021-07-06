import React from 'react';

function Success(props) {
  return (
    <div className="commentMessageSuccess">
      Comment sent successfully!
    </div>
  );
}
function Error(props) {
  return (
    <div className="commentMessageError">
      Comment sent ERROR!
    </div>
  );
}

export { Success, Error };
