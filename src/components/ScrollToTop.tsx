import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props: { history: any }) {
  useEffect(() => {
    const unlisted = props.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisted();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);