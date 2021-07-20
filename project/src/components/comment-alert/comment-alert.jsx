import React from 'react';

function Success(props) {
  return (
    <div className="commentMessageSuccess" data-testid="Success">
      Comment sent successfully!
    </div>
  );
}
function Error(props) {
  return (
    <div className="commentMessageError" data-testid="ERROR">
      Comment sent ERROR!
    </div>
  );
}

export { Success, Error };
