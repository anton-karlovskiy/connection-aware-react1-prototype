
import React from 'react';

import useConnectionEffectiveType from '../../utils/hooks';
import './connection-aware-media.css';

const ConnectionAwareMedia = () => {
  const connectionEffectiveType = useConnectionEffectiveType();

  console.log('[ConnectionAwareMedia] connectionEffectiveType => ', connectionEffectiveType);

  let media;
  switch(connectionEffectiveType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      media = <img className="responsive" src="https://img.youtube.com/vi/DYYtuKyMtY8/mqdefault.jpg" alt="minimum size" />;
      break;
    case '2g':
      media = <img className="responsive" src="https://img.youtube.com/vi/DYYtuKyMtY8/0.jpg" alt="medium size" />;
      break;
    case '3g':
      media = <img className="responsive" src="https://img.youtube.com/vi/DYYtuKyMtY8/maxresdefault.jpg" alt="maximum size" />;
      break;
    case '4g':
      media = <video className="responsive" src="https://cdn.glitch.com/a5370f7a-8a0f-491c-8831-ff3dd5544def%2F4g-video.mp4?v=1562840860124" controls />;
      break;
    default:
      media = <video className="responsive" src="https://cdn.glitch.com/a5370f7a-8a0f-491c-8831-ff3dd5544def%2F4g-video.mp4?v=1562840860124" controls />;
      break;
  }

  return (
    <div className="root-frame">
      {media}
    </div>
  );
};

export default ConnectionAwareMedia;
