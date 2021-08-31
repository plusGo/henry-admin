import React from 'react';
import './index.less';

function Loading() {
  console.log(`loading rendered`);
  return (
    <div className="loadingio-spinner-interwind-dz6m9ldx3bg">
      <div className="ldio-vv9aigjxqn8">
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Loading);
