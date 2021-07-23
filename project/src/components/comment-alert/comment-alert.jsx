import React from 'react';

function Success() {
  return (
    <div className="commentMessageSuccess" data-testid="Success">
      Comment sent successfully!
    </div>
  );
}
function Error() {
  return (
    <div className="commentMessageError" data-testid="ERROR">
      Comment sent ERROR!
    </div>
  );
}

export { Success, Error };
